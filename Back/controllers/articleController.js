const slugify = require('slugify');

const articleDataMapper = require('../dataMappers/articleDataMapper');

module.exports = {

    getAllArticlesWithClass: async (request, response, next) => {

        let result;
        // si l'utilisateur est professeur (accès à tous les articles)
        if (request.session.user.state === 'teacher') {
            result = await articleDataMapper.getAllArticlesWithClass();
        };

        // si l'utilisateur est un élève (accès aux articles concernant la classe)
        if (request.session.user.state === 'class') {
            result = await articleDataMapper.getArticlesByClass(request.session.user.id);
        };

        return response.json({ result });

    },

    getOneArticle: async (request, response, next) => {

        const articleId = request.params.id;

        const result = await articleDataMapper.getOneArticle(articleId);

        if (!result) {
            return response.json({ error: 'Aucun article ne porte ce numéro!' });
        }

        return response.json({ result });

    },

    createOneArticle: async function (request, response, next) {

        const articleId = request.params.id;

        if (request.session.user.state !== 'teacher') {
            return response.json({ error: 'Vous n\'avez pas les droits nécessaires pour créer un article' });
        };

        const article = {

            title: request.body.title,
            slug: slugify(request.body.title, { remove: /[*+~.()'"!:@]/g, lower: true }),
            excerpt: request.body.content.substring(0,200) + '...',
            content: request.body.content,
            teacherId: request.session.user.id,

        };

        // vérification des données reçues 

        const mandatory = [];

        if (!article.title) {
            mandatory.push('Le titre est obligatoire');
        }

        if (!article.content) {
            mandatory.push('L\'article est vide!');
        }

        // on renvoit les erreurs si il y en a
        if (mandatory.length > 0) {
            return response.json({ error: mandatory });
        }

        const result = await articleDataMapper.createOneArticle(article);

        return response.json({ result });

    },

    editArticle: async (request, response, next) => {

        const articleId = request.params.id;

        const result = await articleDataMapper.editArticle(request.body, articleId);

        return response.json({ result });

    },

    deleteArticle: async (request, response, next) => {

        const articleId = request.params.id;

        const result = await articleDataMapper.deleteArticle(articleId);

        // si utilisateur renseigne un article inconnu
        if (!result) {
            return response.json({ error: 'Article inconnu - Le numéro indiqué ne fait référence à aucun article' });
        }

        return response.json({ deleted_article: result });

    },

    associateClassToArticle: async (request, response, next) => {

        const articleId = request.params.id;

        const result = await articleDataMapper.associateClassToArticle(articleId, request.body.classId);

        // fin d'éxécution si le professeur tente d'associer une classe inexistante ou un article inexistant
        if (!result) {
            return response.json({ error: 'Impossible d\'associer cette classe à cet article' });
        }

        return response.json({ result });

    },

    removeAssociationClassToArticle: async (request, response, next) => {

        const articleId = request.params.id;

        const result = await articleDataMapper.removeAssociationClassToArticle(articleId, request.body.classId);

        // fin d'éxécution si le professeur tente d'associer une classe inexistante ou un article inexistant
        if (!result) {
            return response.json({ error: 'Impossible de supprimer cette association' });
        }

        return response.json({ result });

    },

};