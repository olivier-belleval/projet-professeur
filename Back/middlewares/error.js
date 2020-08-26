module.exports = {


    error404: (request, response, next) => {

        response.status(404).json('404!');
    }

};
