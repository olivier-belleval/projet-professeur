const articleDataMapper = require('../dataMappers/articleDataMapper');

module.exports = {

    getAllArticles: async (request, response, next) => {

        // request.session.user = { state: 'teacher'};
        request.session.user = { id: 1, state: 'class'};

        // fin d'éxécution si utilisateur n'est pas identifié
        if(!request.session.user) {
            // prévoir gestion status + json
            console.log('utilisateur n\'est pas connecté');
            return;
        };

        // si l'utilisateur est professeur (accès à tous les articles)
        if(request.session.user.state === 'teacher') {
            const result = await articleDataMapper.getAllArticles();
            return response.json({ result });
        };

        // si l'utilisateur est un élève (accès aux articles concernant la classe)
        if(request.session.user.state === 'class') {
            const result = await articleDataMapper.getArticlesByClass(request.session.user.id);
            return response.json({ result });
        };

    }


};