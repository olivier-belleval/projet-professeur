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
            
            const className = request.params.classname.replace('_',' ');

            const allKanban = await kanbanDataMapper.getAllKanbansByClass(className);

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
            await kanbanDataMapper.deleteKanban(kanbanId);
            response.json({
                status: "deleted"
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
