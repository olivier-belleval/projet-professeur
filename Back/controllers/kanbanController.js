const kanbanDataMapper = require('../dataMappers/kanbanDataMapper');
const slugify = require('slugify');

module.exports = {

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

    getAllKanbans:async (request, response, next) => {
        try {

            const allKanban = await kanbanDataMapper.getAllKanbans();

            response.json({
                allKanban
            });
        } catch (error) {
            console.trace(error);
            response.status(500).json(error);
        }
    },

    getAllKanbansByClass: async (request, response, next) => {
        try {
            
            const classId = request.params.classId;

            const allKanban = await kanbanDataMapper.getAllKanbansByClass(classId);

            response.json({
                allKanban
            });
            
        } catch (error) {
            console.trace(error);
            response.status(500).json(error);
        }
    },

    getOneKanbansById:async (request, response, next) => {
        try {
            const kanbanId = request.params.id
            const allKanban = await kanbanDataMapper.getOneKanbansById(kanbanId);

            response.json({
                allKanban
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
                status: result || "deleted"
            })

        } catch (error) {
            console.trace(error);
            response.status(500).json(error); 
        };
    },

    createList:async (request, response) => {
        try {
            // we create an object and store the request.body values
            const newListObject = {};
            newListObject['kanban_id'] = request.params.id;

            for (const key in request.body) {
                newListObject[key] = request.body[key];
            };
            console.log('newListObject : ', newListObject)            

            const newList = await kanbanDataMapper.createList(newListObject);

            response.json({
                newList
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

    deleteCard: async (request, response) => {
        try {
            // get the kanban id from params
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


    todo: async () => (_, response) => {
        response.json({
            status: "todo"
        });
    },

}
