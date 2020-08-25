const kanbanDataMapper = require('../dataMappers/kanbanDataMapper');
const {kanbansFormater} = require('../services/factory')
const slugify = require('slugify');

module.exports = {

    getAllKanbans:async (request, response, next) => {
        try {

            let result;

            // si l'utilisateur est professeur (accès à tous les articles)
            if (request.session.user.state === 'teacher') {
                result = await kanbanDataMapper.getAllKanbans();
            };

            // si l'utilisateur est un élève (accès aux articles concernant la classe)
            if (request.session.user.state === 'class') {
                const classId = request.session.user.id;
                result = await kanbanDataMapper.getAllKanbansByClass(classId);
            };
            const formatedResult = kanbansFormater(result);
            return response.json({ 
                formatedResult
            });

        } catch (error) {
            console.trace(error);
            response.status(500).json(error);
        }
    },

    getOneKanbansById:async (request, response, next) => {
        try {
            const kanbanId = request.params.id
            const result = await kanbanDataMapper.getOneKanbansById(kanbanId);

            const formatedResult = kanbansFormater(result);

            response.json({
                formatedResult
            });
        } catch (error) {
            console.trace(error);
            response.status(500).json(error);
        }
    },

    createKanban:async (request, response) => {
        try {
            // we create an object and store the request.body values
            const newKanbanObject = {};
            for (const key in request.body) {
                newKanbanObject[key] = request.body[key];
            };
            newKanbanObject.slug = slugify(request.body.title, '-');

            const newKanban = await kanbanDataMapper.createKanban(newKanbanObject);

            response.json({
                newKanban
            });
        } catch (error) {
            console.trace(error);
            response.status(500).json(error);
        }
    },

    editKanban:async (request, response) => {
        try {
            // we create an object and store the request.body values
            const editKanbanObject = {};
            for (const key in request.body) {
                if (request.body[key] !== '') {
                    editKanbanObject[key] = request.body[key];
                }
            };
            if (request.body.title) {
                editKanbanObject.slug = slugify(request.body.title, '-');
            }
            

            const editedKanban = await kanbanDataMapper.editKanban(editKanbanObject, request.params.id);

            response.json({
                editedKanban
            });
        } catch (error) {
            console.trace(error);
            response.status(500).json(error);
        }
    },

    deleteKanban: async (request, response) => {
        try {
            // get the kanban id from params
            const kanbanId = request.params.id;
            const result = await kanbanDataMapper.deleteKanban(kanbanId);
            response.json({
                status: "deleted",
                result
            })

        } catch (error) {
            console.trace(error);
            response.status(500).json(error); 
        };
    },

    associateClassToKanban: async (request, response) => {

        const result = await kanbanDataMapper.associateClassToKanban(request.params.kanbanId, request.body.classId);

        // fin d'éxécution si le professeur tente d'associer une classe inexistante ou un kanban inexistant
        if (!result) {
            return response.json({ error: 'Impossible d\'associer cette classe à cet article' });
        }

        return response.json({ result });

    },

    removeAssociationClassToKanban: async (request, response, next) => {

        const kanbanId = request.params.id;

        const result = await kanbanDataMapper.removeAssociationClassToKanban(kanbanId, request.body.classId);

        // fin d'éxécution si le professeur tente d'associer une classe inexistante ou un article inexistant
        if (!result) {
            return response.json({ error: 'Impossible de supprimer cette association' });
        }

        return response.json({ result });

    },

    getOneListById: async (request, response, next) => {
        try {
            const kanbanId = request.params.kanbanId
            const listId = request.params.listId
            const result = await kanbanDataMapper.getOneListById(kanbanId, listId);

            //const result = kanbansFormater(pre_result)

            response.json({
                result
            });

        } catch (error) {
            console.trace(error);
            response.status(500).json(error);
        }
    },

    createList:async (request, response) => {
        try {
            // we create an object and store the request.body values
            const newListObject = {};
            newListObject['kanban_id'] = request.params.id;

            for (const key in request.body) {
                newListObject[key] = request.body[key];
            };         

            const result = await kanbanDataMapper.createList(resultObject);

            response.json({
                result
            });
        } catch (error) {
            console.trace(error);
            response.status(500).json(error);
        }
    },

    editList:async (request, response) => {
        try {
            // we create an object and store the request.body values
            const editListObject = {};
            for (const key in request.body) {
                if (request.body[key] !== '') {
                    editListObject[key] = request.body[key];
                }
            };
            editListObject['list_id'] = request.params.listId;
            editListObject['kanban_id'] = request.params.kanbanId;



            const result = await kanbanDataMapper.editList(editListObject, request.params.listId);

            response.json({
                result
            });
        } catch (error) {
            console.trace(error);
            response.status(500).json(error);
        }
    },

    deletelist: async (request, response) => {
        try {
            // get the kanban id from params
            const kanbanId = request.params.kanbanId;
            const listId = request.params.listId;
            const result = await kanbanDataMapper.deleteList(listId, kanbanId);
            response.json({
                status: result || "deleted" 
            })

        } catch (error) {
            console.trace(error);
            response.status(500).json(error); 
        };
    },

    getOneCardById: async (request, response, next) => {
        try {
            const cardId = request.params.cardId
            const listId = request.params.listId
            const result = await kanbanDataMapper.getOneCardById(cardId, listId);

            response.json({
                result
            });

        } catch (error) {
            console.trace(error);
            response.status(500).json(error);
        }
    },

    createCard:async (request, response) => {
        try {
            // we create an object and store the request.body values
            const newCardObject = {};
            newCardObject['list_id'] = request.params.id;

            for (const key in request.body) {
                newCardObject[key] = request.body[key];
            };         

            const newCard = await kanbanDataMapper.createCard(newCardObject);

            response.json({
                newCard
            });
        } catch (error) {
            console.trace(error);
            response.status(500).json(error);
        }
    },

    editCard:async (request, response) => {
        try {
            // we create an object and store the request.body values
            
            const editCardObject = {};
            for (const key in request.body) {
                if (request.body[key] !== '') {
                    editCardObject[key] = request.body[key];
                }
            };
            editCardObject['card_id'] = request.params.cardId;
            editCardObject['list_id'] = request.params.listId;

            const editedCard = await kanbanDataMapper.editCard(editCardObject);

            response.json({
                editedCard
            });
        } catch (error) {
            console.trace(error);
            response.status(500).json(error);
        }
    },

    deleteCard: async (request, response) => {
        try {
            // get the card id from params
            const listId = request.params.listId;
            const cardId = request.params.cardId;
            const result = await kanbanDataMapper.deleteCard(cardId, listId);
            response.json({
                status: result || "deleted" 
            })

        } catch (error) {
            console.trace(error);
            response.status(500).json(error); 
        };
    },

    getAllTags:async (request, response, next) => {
        try {
            const result = await kanbanDataMapper.getAllTags();

            response.json({
                result
            });
        } catch (error) {
            console.trace(error);
            response.status(500).json(error);
        }
    },

    getOneTagById: async (request, response, next) => {
        try {
            const tagId = request.params.id
            const result = await kanbanDataMapper.getOneTagById(tagId);

            response.json({
                result
            });

        } catch (error) {
            console.trace(error);
            response.status(500).json(error);
        }
    },

    createTag:async (request, response) => {
        try {
            // we create an object and store the request.body values
            const newTagObject = {};

            for (const key in request.body) {
                newTagObject[key] = request.body[key];
            };         

            const newTag = await kanbanDataMapper.createTag(newTagObject);

            response.json({
                newTag
            });
        } catch (error) {
            console.trace(error);
            response.status(500).json(error);
        }
    },

    editTag:async (request, response) => {
        try {
            // we create an object and store the request.body values
            const editTagObject = {};
            editTagObject['tagId'] = request.params.id;
            for (const key in request.body) {
                if (request.body[key] !== '') {
                    editTagObject[key] = request.body[key];
                }
            };
            console.log('edit tag : ', editTagObject)
            const editedTag = await kanbanDataMapper.editTag(editTagObject);

            response.json({
                editedTag
            });
        } catch (error) {
            console.trace(error);
            response.status(500).json(error);
        }
    },

    deleteTag: async (request, response) => {
        try {
            // get the tag id from params
            const tagId = request.params.id;
            const result = await kanbanDataMapper.deleteTag(tagId);
            response.json({
                status: result || "deleted" 
            })

        } catch (error) {
            console.trace(error);
            response.status(500).json(error); 
        };
    },

    createAssociationTagToCard:async (request, response) => {
        try {
            // we create an object and store the request.body values
            const newTagCardObject = {};
            // get the kanban id from params
            newTagCardObject['tagId'] = request.params.tagId;
            newTagCardObject['cardId'] = request.params.cardId;

            for (const key in request.body) {
                newTagCardObject[key] = request.body[key];
            };           

            const newTag = await kanbanDataMapper.createAssociationTagToCard(newTagCardObject);

            response.json({
                newTag
            });
        } catch (error) {
            console.trace(error);
            response.status(500).json(error);
        }
    },

    deleteAssociationTagToCard: async (request, response) => {
        try {
            // we create an object and store the request.body values
            const newTagCardObject = {};
            // get the card and tag id from params
            newTagCardObject['tagId'] = request.params.tagId;
            newTagCardObject['cardId'] = request.params.cardId;
            const result = await kanbanDataMapper.deleteAssociationTagToCard(newTagCardObject);
            response.json({
                status: result || "deleted" 
            })

        } catch (error) {
            console.trace(error);
            response.status(500).json(error); 
        };
    },

    todo: async () => (_, response) => {
        response.json({
            status: "todo"
        });
    },
}
