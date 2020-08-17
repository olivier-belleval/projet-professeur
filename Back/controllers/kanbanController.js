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

    todo: async () => (_, response) => {
        response.json({
            status: "todo"
        });
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


}
