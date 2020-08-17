const kanbanDataMapper = require('../dataMappers/kanbanDataMapper');
const slugify = require('slugify');

module.exports = {

    createKanban:async (request, response) => {
        // we create an object and store the request.body values
        const newKanbanObject = {};
        for (const key in request.body) {
            newKanbanObject[key] = request.body[key]
        }
        newKanbanObject.slug = slugify(request.body.title, '-');

        const newKanban = await kanbanDataMapper.createKanban(newKanbanObject);

        response.json({
            newKanban
        })

    },

    todo: async () => (_, response) => {
        response.json({
            status: "todo"
        })
    },


}