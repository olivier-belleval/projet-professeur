const adminDataMapper = require('../dataMappers/adminDataMapper');
const utility = require('../module/utility');

module.exports = {

    getAllClasses: async (request, response) => {

        try {

            const result = await adminDataMapper.getAllClasses();

            response.status(200).json({ data: result });

        } catch (error) {

            response.status(500).json(error.toString());

        };
    },

    getAllArticlesWithoutClasses: async (request, response) => {

        try {

            const result = await adminDataMapper.getAllArticlesWithoutClasses();

            response.status(200).json({ data: result });

        } catch (error) {

            response.status(500).json(error.toString());

        };

    },

    getOneClass: async (request, response) => {

        try {

            const classId = request.params.id;

            const result = await adminDataMapper.getOneClass(classId);

            if (!result) {

                return response.status(404).json('Can\'t find class with id: ' + classId);

            };

            response.status(200).json({ data: result });

        } catch (error) {

            response.status(500).json(error.toString());
        };
    },

    createClass: async (request, response) => {

        try {

            const data = {

                username: request.body.username,
                password: request.body.password,
                description: request.body.description,
                teacherId: request.session.user.id

            };

            // vérification des données reçues 

            const mandatory = [];

            if (!data.username) {
                mandatory.push('Username cannot be blank.');
            };

            if (!data.password) {
                mandatory.push('Password cannot be blank.');
            };

            if (!data.description) {
                mandatory.push('Description cannot be blank.')
            };

            // on renvoit les erreurs si il y en a
            if (mandatory.length > 0) {
                return response.status(400).json(mandatory);
            };

            const result = await adminDataMapper.createClass(data);

            if (!result) {

                return response.status(404).json('A class with a similar username already exists.');

            }

            response.status(200).json({ message: 'Class has been created successfully', data: result });

        } catch (error) {

            response.status(500).json(error.toString());

        };
    },

    editClass: async (request, response) => {

        try {

            const classId = request.params.id;

            const data = {};

            // on récupère les éléments transmis dans request body
            for (const input in request.body) {

                // on exclue les champs vides
                if (request.body[input] !== '') {
                    data[input] = request.body[input];
                };

            };

            // fin d'éxécution si aucune modification
            if (utility.isEmpty(data)) {

                return response.status(400).json('Fields are all empty.');

            };

            const result = await adminDataMapper.editClass(data, classId);

            if (!result) {

                return response.status(400).json('Failed to edit class with id ' + classId);

            };

            response.status(200).json({ message: 'Class has been edited successfully', data: result });

        } catch (error) {

            response.status(500).json(error.toString());

        };
    },

    deleteClass: async (request, response) => {

        try {

            const classId = request.params.id;

            const result = await adminDataMapper.deleteClass(classId);

            if (!result) {

                return response.status(400).json('Failed to delete class with id ' + classId);

            };

            response.status(200).json({ message: 'Class has been deleted successfully', data: result });

        } catch (error) {

            response.status(500).json(error.toString());

        };
    }

};