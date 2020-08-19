const userDataMapper = require('../dataMappers/userDataMapper');

module.exports = {

    classLogin: async (request, response, next) => {

        // fin d'éxécution si username ou password ne sont pas renseignés
        if (!request.body.username || !request.body.password) {
            return response.status(400).json({ error: 'mdp ou identifiant invalide' })
        }

        // appel datamapper pour vérification du username/password
        const result = await userDataMapper.checkClass(request.body.username, request.body.password);

        // fin d'éxécution si aucun résultat
        if (!result) {
            return response.status(400).json({ error: 'mdp ou identifiant invalide' });
        }

        // on stocke l'id de la classe, son username/nom et son state en cookie si l'authentification est réussie
        request.session.user = result;
        return response.json({ data: 'authentification réussie' });
    },
    
    logout: (request,response) => {
            
        if (!request.session) {
            // if it have no active session
            return response.json({ msg: 'no user to log out!' })
        } else {
            // if active session then destroy it and the cookie
            request.session.destroy()
            response.clearCookie('connect.sid') // clean up!
            return response.json({ msg: 'logging you out' })
        }
    },

    adminLogin: async (request, response, next) => {

        // fin d'éxécution si username ou password ne sont pas renseignés
        if (!request.body.username || !request.body.password) {
            return response.status(400).json({ error: 'mdp ou identifiant invalide' })
        }

        // appel datamapper pour vérification du username/password
        const result = await userDataMapper.checkTeacher(request.body.username, request.body.password);

        // fin d'éxécution si aucun résultat
        if (!result) {
            return response.status(400).json({ error: 'mdp ou identifiant invalide' });
        }

        // on stocke l'id du teacher, son username et son state en cookie si l'authentification est réussie
        request.session.user = result;
        return response.json({ data: 'authentification réussie' });

    },


}