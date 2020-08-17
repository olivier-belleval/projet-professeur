const userDataMapper = require('../dataMappers/userDataMapper');

module.exports = {

    login: async (request, response, next) => {
        
        // fin d'éxécution si username ou password ne sont pas renseignés
        if (!request.body.username || !request.body.password) {
            // prévoir gestion 404 - next();
            console.log('par ici!');
            return;
        }

        // appel datamapper pour vérification du username/password
        const check = await userDataMapper.checkClass(request.body.username, request.body.password);

        // fin d'éxécution si aucun résultat
        if (!check) {
            return response.status(400).json({ data: 'mdp ou identifiant invalide' });
        }

        // on stocke l'id de la classe et son nom en cookie si l'authentification est réussie
        request.session.user = check;
        console.log('authentification réussie!');
        response.json({
            data: check
        })
        console.log('request.session.user : ', request.session.user)
        
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

    todo: async () => (_, response) => {
        response.json({
            status: "todo"
        })
    },


}