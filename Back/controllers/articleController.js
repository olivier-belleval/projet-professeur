const slugify = require('slugify');

const articleDataMapper = require('../dataMappers/articleDataMapper');

module.exports = {

    getAllArticles: async (request, response, next) => {

        request.session.user = { state: 'teacher'};
        // request.session.user = { id: 1, state: 'class'};

        // fin d'éxécution si utilisateur n'est pas identifié
        if(!request.session.user) {
            // prévoir gestion status + json
            console.log('utilisateur n\'est pas connecté');
            return;
        };

        // si l'utilisateur est professeur (accès à tous les articles)
        if(request.session.user.state === 'teacher') {
            var result = await articleDataMapper.getAllArticles();
        };

        // si l'utilisateur est un élève (accès aux articles concernant la classe)
        if(request.session.user.state === 'class') {
            var result = await articleDataMapper.getArticlesByClass(request.session.user.id);
        };

        return response.json({ result });

    },

    getOneArticle: async (request, response, next) => {

        const articleId = request.params.id;

        request.session.user = { state: 'teacher'};

        // fin d'éxécution si utilisateur n'est pas identifié
        if(!request.session.user) {
            // prévoir gestion status + json
            console.log('utilisateur n\'est pas connecté');
            return;
        };

        const result = await articleDataMapper.getOneArticle(articleId);

        if(!result) {

            // prévoir 404
            console.log('aucun article!');
        }

        return response.json({ result });

    },

    createOneArticle: async function (request, response, next) {

        const articleId = request.params.id;

        request.session.user = { state: 'teacher', id: 1};

        // fin d'éxécution si utilisateur n'est pas identifié
        if(!request.session.user) {
            // prévoir gestion status + json
            console.log('utilisateur n\'est pas connecté');
            return;
        };

        if(request.session.user.state === 'teacher') {

            const article = { 

                title: request.body.title,
                slug: slugify(request.body.title, {remove: /[*+~.()'"!:@]/g, lower:true}),
                excerpt: request.body.excerpt,
                content: request.body.content,
                teacherId: request.session.user.id,

            };


            // vérification des données reçues 
            
            const mandatory = [];

            if(!article.title) {
                mandatory.push('Le titre est obligatoire');
            }

            if(!article.excerpt) {
                mandatory.push('L\'extrait est obligatoire');
            }

            if(!article.content) {
                mandatory.push('L\'article est vide!');
            }

            if(mandatory.length > 0) {
                return response.json({ error: mandatory});
            }

            const result = await articleDataMapper.createOneArticle(article);

            return response.json({ result });

        } else {

            // 404?
            console.log('vous n\'êtes pas autorisé à écrire un article');
        }


    },


};