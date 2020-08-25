const userDataMapper = require('../dataMappers/userDataMapper');

module.exports = {

    classLogin: async (request, response, next) => {

        try {

            // fin d'éxécution si username ou password ne sont pas renseignés
            if (!request.body.username || !request.body.password) {
                return response.status(400).json('Username or password cannot be blank');
            };

            // appel datamapper pour vérification du username/password
            const result = await userDataMapper.checkClass(request.body.username, request.body.password);

            // fin d'éxécution si aucun résultat
            if (!result) {
                return response.status(400).json('Invalid username or password - Failed to connect');
            };

            // on stocke l'id de la classe, son username/nom et son state en cookie si l'authentification est réussie
            request.session.user = result;

            response.status(200).json('Successful login.');

        } catch (error) {

            response.status(500).json(error.toString());

        };
    },

    logout: (request, response) => {


        try {

            if (!request.session) {

                // if it have no active session
                return response.status(400).json('Cannot log out unidentified user.');

            } else {

                // if active session then destroy it and the cookie
                request.session.destroy()
                response.clearCookie('connect.sid') // clean up!
                return response.status(200).json('Successful logout');

            };

        } catch (error) {

            response.status(500).json(error.toString());

        };
    },

    adminLogin: async (request, response, next) => {

        try {

            // fin d'éxécution si username ou password ne sont pas renseignés
            if (!request.body.username || !request.body.password) {
                return response.status(400).json('Username or password cannot be blank');
            }

            // appel datamapper pour vérification du username/password
            const result = await userDataMapper.checkTeacher(request.body.username, request.body.password);

            // fin d'éxécution si aucun résultat
            if (!result) {
                return response.status(400).json('Invalid username or password - Failed to connect');
            };

            // on stocke l'id du teacher, son username et son state en cookie si l'authentification est réussie
            request.session.user = result;

            response.status(200).json('Successful login.');

        } catch (error) {

            response.status(500).json(error.toString());

        };

    },

    // méthode pour récupérer tous les classes_usernames et les afficher dans le scroll (page de connexion)
    getClassesUsernames: async (request, response, next) => {

        try {

            const result = await userDataMapper.getClassesUsernames();

            response.status(200).json({ data: result });

        } catch (error) {

            response.status(500).json(error.toString());

        };
    }

}