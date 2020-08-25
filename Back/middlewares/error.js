module.exports = {


    error404: (request, response, next) => {

        if (!request.session.user) {
            response.status(404).json('404!');
        } else {
            next();
        }

    }

};
