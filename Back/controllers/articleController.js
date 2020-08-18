const slugify = require('slugify');

const articleDataMapper = require('../dataMappers/articleDataMapper');

module.exports = {

    getAllArticlesWithClass: async (request, response, next) => {

        request.session.user = { id: 1, state: 'teacher' };
        // request.session.user = { id: 1, state: 'class'};

        // fin d'éxécution si utilisateur n'est pas identifié
        if (!request.session.user) {
            return response.json({ error: 'Vous devez d\'abord vous connecter' });
        };

        // si l'utilisateur est professeur (accès à tous les articles)
        if (request.session.user.state === 'teacher') {
            var result = await articleDataMapper.getAllArticlesWithClass();
        };

        // si l'utilisateur est un élève (accès aux articles concernant la classe)
        if (request.session.user.state === 'class') {
            var result = await articleDataMapper.getArticlesByClass(request.session.user.id);
        };

        return response.json({ result });

    },

    getOneArticle: async (request, response, next) => {

        const articleId = request.params.id;

        request.session.user = { id: 1, state: 'teacher' };

        // fin d'éxécution si utilisateur n'est pas identifié
        if (!request.session.user) {
            return response.json({ error: 'Vous devez d\'abord vous connecter' });
        };

        const result = await articleDataMapper.getOneArticle(articleId);

        if (!result) {
            return response.json({ error: 'Aucun article ne porte ce numéro!' });
        }

        return response.json({ result });

    },

    createOneArticle: async function (request, response, next) {

        const articleId = request.params.id;

        // request.session.user = { state: 'teacher', id: 1 };

        // fin d'éxécution si utilisateur n'est pas identifié
        if (!request.session.user) {
            return response.json({ error: 'Vous devez d\'abord vous connecter' });
        };

        if (request.session.user.state !== 'teacher') {
            return response.json({ error: 'Vous n\'avez pas les droits nécessaires pour créer un article' });
        }
        

            const article = {

                title: request.body.title,
                slug: slugify(request.body.title, { remove: /[*+~.()'"!:@]/g, lower: true }),
                excerpt: request.body.excerpt,
                content: request.body.content,
                teacherId: request.session.user.id,

            };


            // vérification des données reçues 

            const mandatory = [];

            if (!article.title) {
                mandatory.push('Le titre est obligatoire');
            }

            if (!article.excerpt) {
                mandatory.push('L\'extrait est obligatoire');
            }

            if (!article.content) {
                mandatory.push('L\'article est vide!');
            }

            if (mandatory.length > 0) {
                return response.json({ error: mandatory });
            }

            const result = await articleDataMapper.createOneArticle(article);

            return response.json({ result });

        

    },

    deleteArticle: async (request, response, next) => {

        const articleId = request.params.id;

        request.session.user = { id: 1, state: 'teacher' };

        // fin d'éxécution si utilisateur n'est pas identifié
        if (!request.session.user) {
            return response.json({ error: 'Vous devez d\'abord vous connecter' });
        };

        // fin d'éxécution si l'utilisateur n'est pas un teacher
        if (request.session.user.state !== 'teacher') {
            return response.json({ error: 'Vous n\'avez pas les droits nécessaires pour supprimer un article!' });
        }

        const result = await articleDataMapper.deleteArticle(articleId);

        // si utilisateur renseigne un article inconnu
        if (!result) {
            return response.json({ error: 'Article inconnu - Le numéro indiqué ne fait référence à aucun article' });
        }

        return response.json({ deleted_article: result });

    },

    associateClassToArticle: async (request, response, next) => {

        // request.session.user = { id: 1, state: 'teacher' };
        if (!request.session.user) {
            return response.json({ error: 'Vous devez d\'abord vous connecter' });
        };

        // fin d'éxécution si l'utilisateur n'est pas un teacher
        if (request.session.user.state !== 'teacher') {
            return response.json({ error: 'Vous n\'avez pas les droits nécessaires pour supprimer un article!' });
        };

        const result = await articleDataMapper.associateClassToArticle(request.body.articleId, request.body.classId);

        // fin d'éxécution si le professeur tente d'associer une classe inexistante ou un article inexistant
        if (!result) {
            return response.json({ error: 'Impossible d\'associer cette classe à cet article' });
        }

        return response.json({ result });

    },

};