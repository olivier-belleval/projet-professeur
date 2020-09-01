const kanbanDataMapper = require('../dataMappers/kanbanDataMapper');

const { kanbansFormater } = require('../services/factory')

const slugify = require('slugify');
const utility = require('../module/utility');

module.exports = {

    /**
     * Request all kanbans with all lists, card and tags associations
     * @function
     * @returns {array} array of all kanbans with associated lists, cards and tags
     */
    getAllKanbans: async (request, response) => {

        try {

            let rawResult;

            // si l'utilisateur est professeur (accès à tous les articles)
            if (request.session.user.state === 'teacher') {

                rawResult = await kanbanDataMapper.getAllKanbans();

            };

            // si l'utilisateur est un élève (accès aux articles concernant la classe)
            if (request.session.user.state === 'class') {

                const classId = request.session.user.id;

                rawResult = await kanbanDataMapper.getAllKanbansByClass(classId);

            };

            const formatedResult = kanbansFormater(rawResult);

            return response.status(200)
                .json({
                    data: formatedResult
                });

        } catch (error) {

            response.status(500)
                .json(error.toString());
        };
    },

    /**
     * Request one kanban with all lists, card and tags associations
     * @function
     * @param {number} kanbanId the kanban's id
     * @returns {array} one kanban with associated lists, cards and tags
     */
    getOneKanbansById: async (request, response) => {

        try {

            const kanbanId = request.params.id;

            const rawResult = await kanbanDataMapper.getOneKanbansById(kanbanId);

            if (!rawResult) {
                return response.status(400)
                    .json('Can\'t find kanban with id: ' + kanbanId + '.');
            }

            const formatedResult = kanbansFormater(rawResult);

            response.status(200)
                .json({
                    data: formatedResult
                });

        } catch (error) {

            response.status(500)
                .json(error.toString());
        };
    },

    /**
     * create a  kanban
     * @function
     * @param {string} title - the kanban's title
     * @param {string} description - the kanban's description
     * @param {string} background - the kanban's background
     * @param {number} teacher_id - the teacher's id
     * @returns {object} created kanban
     */
    createKanban: async (request, response) => {

        try {

            // we create an object and store the request.body values
            const newKanbanObject = {};

            for (const key in request.body) {
                newKanbanObject[key] = request.body[key];
            };

            newKanbanObject.slug = slugify(request.body.title, { remove: /[*+~.()'"!:@]/g, lower: true });
            newKanbanObject.teacher_id = request.session.user.id;

            const result = await kanbanDataMapper.createKanban(newKanbanObject);



            response.status(200)
                .json({
                    data: result
                });

        } catch (error) {

            response.status(500)
                .json(error.toString());
        };
    },

    /**
     * edit a  kanbans 
     * @function
     * @param {string} title - the kanban's title
     * @param {string} description - the kanban's description
     * @param {string} background - the kanban's background
     * @param {number} id - the kanban's id
     * @param {number} teacher_id - the teacher's id
     * @returns {object} edited kanban
     */
    editKanban: async (request, response) => {

        try {

            // we create an object and store the request.body values
            const editKanbanObject = {};

            for (const key in request.body) {
                if (request.body[key] !== '') {
                    editKanbanObject[key] = request.body[key];
                }
            };

            // fin d'éxécution si aucune modification
            if (utility.isEmpty(editKanbanObject)) {

                return response.status(400).json('Fields are all empty.');

            };

            if (request.body.title) {

                editKanbanObject.slug = slugify(request.body.title, { remove: /[*+~.()'"!:@]/g, lower: true });

            };

            editKanbanObject.kanbanId = request.params.id;

            const result = await kanbanDataMapper.editKanban(editKanbanObject);

            if (!result) {

                return response.status(400)
                    .json('Failed to edit kanban with id ' + editKanbanObject.kanbanId + '.');

            };

            response.status(200)
                .json({
                    message: 'kanban has been successfully edited.',
                    data: result
                });

        } catch (error) {

            response.status(500)
                .json(error);

        };
    },

    /**
     * delete a  kanban
     * @function
     * @param {number} id - the teacher's id
     * @returns {object} deleted kanban
     */
    deleteKanban: async (request, response) => {

        try {

            // get the kanban id from params
            const kanbanId = request.params.id;

            const result = await kanbanDataMapper.deleteKanban(kanbanId);

            if (!result) {
                return response.status(400)
                    .json('Failed to delete kanban with id ' + kanbanId + '.');
            };

            response.status(200)
                .json({
                    message: 'kanban has been successfully removed.',
                    data: result
                });

        } catch (error) {

            response.status(500)
                .json(error.toString());

        };
    },

    /**
     * associate a class to a kanbans 
     * @function
     * @param {number} kanbanId - the kanban's id
     * @param {string} className - the class name
     * @returns {object} created association
     */
    associateClassToKanban: async (request, response) => {

        try {

            const kanbanId = request.params.kanbanId;
            const className = request.body.className;

            const result = await kanbanDataMapper.associateClassToKanban(kanbanId, className);

            // fin d'éxécution si le professeur tente d'associer une classe inexistante ou un kanban inexistant
            if (!result) {

                return response.status(400)
                    .json('Association failed.');

            };

            response.status(200)
                .json({
                    message: 'Association has been successfully added.',
                    data: result
                });

        } catch (error) {

            response.status(500)
                .json(error.toString());

        };
    },

    /**
     * remove an association of a class to a kanbans 
     * @function
     * @param {number} kanbanId - the kanban's id
     * @param {string} className - the class name
     * @returns {object} removed association
     */
    removeAssociationClassToKanban: async (request, response) => {

        try {

            const kanbanId = request.params.id;
            const className = request.body.className;

            const result = await kanbanDataMapper.removeAssociationClassToKanban(kanbanId, className);

            // fin d'éxécution si le professeur tente d'associer une classe inexistante ou un article inexistant
            if (!result) {

                return response.status(400)
                    .json('Failed to remove association.');

            };

            response.status(200)
                .json({
                    message: 'Association has been successfully removed.',
                    data: result
                });

        } catch (error) {

            response.status(500)
                .json(error.toString());

        };
    },

    /**
     * get a list on db
     * @function
     * @param {number} listId - the list's id
     * @returns {object} the object list
     */
    getOneListById: async (request, response) => {

        try {

            const listId = request.params.listId

            const result = await kanbanDataMapper.getOneListById(listId);

            if (!result) {

                return response.status(400)
                    .json('Can\'t find list with id: ' + listId + '.');
            }

            response.status(200)
                .json({
                    data: result
                });

        } catch (error) {

            response.status(500)
                .json(error.toString());

        };
    },

    /**
     * create a list 
     * @function
     * @param {string} name - the kanban's name
     * @param {number} order - the kanban's order
     * @param {number} kanban_id - the kanban's id
     * @returns {object} created list
     */
    createList: async (request, response) => {

        try {

            // we create an object and store the request.body values
            const newListObject = {};

            newListObject['kanban_id'] = request.params.id;

            for (const key in request.body) {

                newListObject[key] = request.body[key];

            };

            const result = await kanbanDataMapper.createList(newListObject);

            response.status(200)
                .json({
                    data: result
                });

        } catch (error) {

            response.status(500)
                .json(error.toString());

        };
    },

    /**
     * edit a list 
     * @function
     * @param {string} name - the kanban's name
     * @param {number} order - the kanban's order
     * @param {listId} listId - the list's id
     * @param {number} kanban_id - the kanban's id
     * @returns {object} edited list
     */
    editList: async (request, response) => {

        try {

            // we create an object and store the request.body values
            const editListObject = {};

            for (const key in request.body) {

                if (request.body[key] !== '') {

                    editListObject[key] = request.body[key];

                };

            };

            // fin d'éxécution si aucune modification
            if (utility.isEmpty(editListObject)) {

                return response.status(400).json('Fields are all empty.');

            };

            editListObject['list_id'] = request.params.listId;
            editListObject['kanban_id'] = request.params.kanbanId;

            const result = await kanbanDataMapper.editList(editListObject);

            if (!result) {

                return response.status(400)
                    .json('Failed to edit kanban with id ' + editListObject.list_id + '.');
            };

            response.status(200)
                .json({
                    message: 'list has been successfully edited.',
                    data: result
                });

        } catch (error) {

            response.status(500)
                .json(error.toString());

        };
    },

    /**
     * delete a  list 
     * @function
     * @param {number} listId - the list's id
     * @returns {object} deleted list
     */
    deletelist: async (request, response) => {
        try {
            // get the list id from params
            const listId = request.params.listId;

            const result = await kanbanDataMapper.deleteList(listId);

            if (!result) {

                return response.status(400)
                    .json('Failed to delete list with id ' + listId + '.');

            };

            response.status(200)
                .json({
                    message: 'list has been successfully removed.',
                    data: result
                });

        } catch (error) {

            response.status(500)
                .json(error.toString());

        };
    },

     /**
     * Request one card 
     * @function
     * @param {number} cardId the card's id
     * @param {number} listId the list's id
     * @returns {array} one card 
     */
    getOneCardById: async (request, response) => {

        try {

            const cardId = request.params.cardId
            const listId = request.params.listId

            const result = await kanbanDataMapper.getOneCardById(cardId, listId);

            if (!result) {

                return response.status(400)
                    .json('Can\'t find card with id: ' + cardId + '.');

            };

            response.status(200)
                .json({
                    data: result
                });

        } catch (error) {

            response.status(500)

                .json(error.toString());

        };
    },

    /**
     * create a card 
     * @function
     * @param {string} description - the card's description
     * @param {number} order - the card's order
     * @param {string} color - the card's color
     * @param {number} list_id - the list's id
     * @returns {object} created card
     */
    createCard: async (request, response) => {

        try {

            // we create an object and store the request.body values
            const newCardObject = {};

            for (const key in request.body) {

                newCardObject[key] = request.body[key];

            };

            if (!newCardObject['color']) {
                newCardObject['color'] = '#F0F';
            };

            newCardObject['list_id'] = request.params.id;

            const result = await kanbanDataMapper.createCard(newCardObject);

            console.log('data in controller: ', result)

            response.status(200)
                .json({
                    message: 'Card has been successfully created.',
                    data: result
                });

        } catch (error) {

            response.status(500)
                .json(error.toString());

        };
    },

    /**
     * edit a card 
     * @function
     * @param {string} description - the card's description
     * @param {number} order - the card's order
     * @param {string} color - the card's color
     * @param {number} cardId - the card's id
     * @param {number} list_id - the list's id
     * @returns {object} edited card
     */
    editCard: async (request, response) => {

        try {

            // we create an object and store the request.body values
            const editCardObject = {};

            for (const key in request.body) {

                if (request.body[key] !== '') {

                    editCardObject[key] = request.body[key];

                };

            };

            if (utility.isEmpty(editCardObject)) {

                return response.status(400).json('Fields are all empty.');

            };

            editCardObject['card_id'] = request.params.cardId;
            editCardObject['list_id'] = request.params.listId;

            const result = await kanbanDataMapper.editCard(editCardObject);

            if (!result) {

                return response.status(400)
                    .json('Failed to edit card with id ' + editCardObject.card_id + '.');

            };

            response.status(200)
                .json({
                    message: 'Card has been successfully edited.',
                    data: result
                });

        } catch (error) {

            response.status(500)
                .json(error);

        };
    },

    /**
     * delete a  card 
     * @function
     * @param {number} listId - the list's id
     * @param {number} cardId - the card's id
     * @returns {object} deleted card
     */
    deleteCard: async (request, response) => {

        try {

            // get the card id from params
            const listId = request.params.listId;
            const cardId = request.params.cardId;

            const result = await kanbanDataMapper.deleteCard(cardId, listId);

            if (!result) {

                return response.status(400)
                    .json('Failed to delete card with id ' + cardId + '.');

            };

            response.status(200)
                .json({
                    message: 'Card has been successfully removed.',
                    data: result
                });

        } catch (error) {

            response.status(500)
                .json(error.toString());

        };
    },

    /**
     * Request all tags 
     * @function
     * @returns {array} array of all tags 
     */
    getAllTags: async (_, response) => {

        try {

            const result = await kanbanDataMapper.getAllTags();

            return response.status(200)
                .json({
                    data: result
                });

        } catch (error) {

            response.status(500)
                .json(error.toString());
        }
    },

    /**
     * Request one kanban with all lists, card and tags associations
     * @function
     * @param {number} tagId the tag's id
     * @returns {array} one kanban with associated lists, cards and tags
     */
    getOneTagById: async (request, response) => {

        try {

            const tagId = request.params.id;

            const result = await kanbanDataMapper.getOneTagById(tagId);

            if (!result) {

                return response.status(400)
                    .json('Can\'t find tag with id: ' + tagId + '.');

            };

            response.status(200)
                .json({
                    data: result
                });

        } catch (error) {

            response.status(500)
                .json(error.toString());

        };
    },

    /**
     * create a  tag
     * @function
     * @param {string} name - the tag's name
     * @param {string} color - the tag's color
     * @returns {object} created tag
     */
    createTag: async (request, response) => {

        try {

            // we create an object and store the request.body values
            const newTagObject = {};

            for (const key in request.body) {

                newTagObject[key] = request.body[key];

            };

            const result = await kanbanDataMapper.createTag(newTagObject);

            response.status(200)
                .json({
                    message: 'Tag has been successfully created.',
                    data: result
                });

        } catch (error) {

            response.status(500)
                .json(error.toString());

        };
    },

    /**
     * edit a  tag
     * @function
     * @param {string} name - the tag's name
     * @param {string} color - the tag's color
     * @param {number} id tag's id
     * @returns {object} edited tag
     */
    editTag: async (request, response) => {

        try {

            // we create an object and store the request.body values
            const editTagObject = {};

            for (const key in request.body) {

                if (request.body[key] !== '') {

                    editTagObject[key] = request.body[key];

                };

            };

            if (utility.isEmpty(editTagObject)) {

                return response.status(400).json('Fields are all empty.');

            };

            editTagObject['tagId'] = request.params.id;

            const result = await kanbanDataMapper.editTag(editTagObject);

            if (!result) {

                return response.status(400)
                    .json('Failed to edit tag with id ' + editTagObject.tagId + '.');

            };

            response.status(200)
                .json({
                    message: 'Tag has been successfully edited.',
                    data: result
                });

        } catch (error) {

            response.status(500)
                .json(error);

        };
    },

    /**
     * delete a  tag
     * @function
     * @param {number} id - the tag's id
     * @returns {object} deleted tag
     */
    deleteTag: async (request, response) => {

        try {

            // get the tag id from params
            const tagId = request.params.id;

            const result = await kanbanDataMapper.deleteTag(tagId);

            if (!result) {

                return response.status(400)
                    .json('Failed to delete tag with id ' + tagId + '.');

            };

            response.status(200)
                .json({
                    message: 'Tag has been successfully removed.',
                    data: result
                });

        } catch (error) {

            response.status(500)
                .json(error.toString());

        };
    },

    /**
     * associate a tag to a card 
     * @function
     * @param {number} tagId - the tag's id
     * @param {string} cardId - the card's id
     * @returns {object} created association
     */
    createAssociationTagToCard: async (request, response) => {

        try {

            // we create an object and store the request.body values
            const newTagCardObject = {};

            // get the kanban id from params
            newTagCardObject['tagId'] = request.params.tagId;
            newTagCardObject['cardId'] = request.params.cardId;

            for (const key in request.body) {

                newTagCardObject[key] = request.body[key];

            };

            const result = await kanbanDataMapper.createAssociationTagToCard(newTagCardObject);

            if (!result) {

                return response.status(400)
                    .json('Association failed.');

            };

            response.status(200)
                .json({
                    message: 'Association has been successfully added.',
                    data: result
                });

        } catch (error) {

            response.status(500)
                .json(error.toString());

        };
    },

    /**
     * remove association of a tag to a card 
     * @function
     * @param {number} tagId - the tag's id
     * @param {string} cardId - the card's id
     * @returns {object} removed association
     */
    deleteAssociationTagToCard: async (request, response) => {

        try {

            // we create an object and store the request.body values
            const newTagCardObject = {};

            // get the card and tag id from params
            newTagCardObject['tagId'] = request.params.tagId;
            newTagCardObject['cardId'] = request.params.cardId;

            const result = await kanbanDataMapper.deleteAssociationTagToCard(newTagCardObject);

            if (!result) {

                return response.status(400)
                    .json('Failed to remove association.');
            };

            response.status(200)
                .json({
                    message: 'Association has been successfully removed.',
                    data: result
                });

        } catch (error) {

            response.status(500)
                .json(error.toString());

        };
    },

    todo: async () => (_, response) => {
        response.json({
            status: "todo"
        });
    },
    
};
