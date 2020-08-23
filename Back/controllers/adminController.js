const adminDataMapper = require('../dataMappers/adminDataMapper');

module.exports = {

    getAllClasses: async (request, response, next) => {

        const result = await adminDataMapper.getAllClasses();

        response.json({data: result});
    },

    getOneClass: async (request, response, next) => {

        const classId = request.params.id;

        const result = await adminDataMapper.getOneClass(classId);

        response.json({data: result});

    },

    createClass: async (request, response, next) => {

        const data = {

            username: request.body.username,
            password: request.body.password,
            description: request.body.description,
            teacherId: request.session.user.id

        };

        // vérification des données reçues 

        const mandatory = [];

        if (!data.username) {
            mandatory.push('Le username est obligatoire');
        }

        if (!data.password) {
            mandatory.push('Le mot de passe est obligatoire!');
        }

        if(!data.description) {
            mandatory.push('La description est obligatoire')
        }

        // on renvoit les erreurs si il y en a
        if (mandatory.length > 0) {
            return response.json({ error: mandatory });
        }

        const result = await adminDataMapper.createClass(data);

        return response.json({ message: 'Classe créée avec succès', data: result });

    },

    editClass: async (request, response, next) => {

        const classId = request.params.id;

        const result = await adminDataMapper.editClass(request.body, classId);

        if(!result) {
            return response.json({ error: 'Vous ne pouvez pas modifier une classe qui n\'existe pas'})
        }

        return response.json({ message: 'Classe modifiée avec succès', data: result });

    },

    deleteClass: async (request, response, next) => {

        const classId = request.params.id;

        const result = await adminDataMapper.deleteClass(classId);

        return response.json({ message: 'Classe supprimée', data: result });

    }

};