
module.exports = {


    isUserConnected: (request, response, next) => {

        if (!request.session.user) {
            response.json({ error: 'Vous devez être connecté pour continuer' });
        } else {
            next();
        }

    }

}
