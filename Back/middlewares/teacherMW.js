module.exports = {


    isATeacher: (request, response, next) => {

        if (request.session.user.state !== 'teacher') {
            response.status(401).json('You must be logged as a teacher in order to continue');
        } else {
            next();
        }

    }

};