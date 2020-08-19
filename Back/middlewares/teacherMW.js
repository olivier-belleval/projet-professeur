module.exports = {


    isATeacher: (request, response, next) => {

        if (request.session.user.state !== 'teacher') {
            response.json({ error: 'Vous devez être connecté en tant que professeur pour continuer' });
        } else {
            next();
        }

    }

}