module.exports = {


    isUserConnected: (request, response, next) => {

        if (!request.session.user) {
            response.status(400).json('You must be logged in order to continue');
        } else {
            next();
        }

    }

};
