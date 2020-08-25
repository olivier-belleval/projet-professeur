
const articleDataMapper = require('../dataMappers/articleDataMapper');
const slugify = require('slugify');
const utility = require('../module/utility');

module.exports = {

    getAllArticlesWithClass: async (request, response, next) => {

        try {

            let result;

            // si l'utilisateur est professeur (accès à tous les articles)
            if (request.session.user.state === 'teacher') {
                result = await articleDataMapper.getAllArticlesWithClass();
            };

            // si l'utilisateur est un élève (accès aux articles concernant la classe)
            if (request.session.user.state === 'class') {
                result = await articleDataMapper.getArticlesByClass(request.session.user.id);
            };

            response.status(200).json({ data: result });

        } catch (error) {

            response.status(500).json(error.toString());

        };
    },

    getOneArticle: async (request, response, next) => {

        try {

            const articleId = request.params.id;

            const result = await articleDataMapper.getOneArticle(articleId);

            if (!result) {

                return response.status(400).json('Can\'t find article with id: ' + articleId);

            };

            response.status(200).json({ data: result });

        } catch (error) {

            response.status(500).json(error.toString());

        };
    },

    createOneArticle: async function (request, response, next) {

        try {

            const article = {

                title: request.body.title,
                slug: slugify(request.body.title, { remove: /[*+~.()'"!:@]/g, lower: true }),
                excerpt: request.body.content.substring(0, 200) + '...',
                content: request.body.content,
                teacherId: request.session.user.id,

            };

            // vérification des données reçues 

            const mandatory = [];

            if (!article.title) {
                mandatory.push('Le titre est obligatoire');
            };

            if (!article.content) {
                mandatory.push('L\'article est vide!');
            };

            // on renvoie les erreurs si il y en a
            if (mandatory.length > 0) {
                return response.status(400).json(mandatory);
            };

            const result = await articleDataMapper.createOneArticle(article);

            response.status(200).json({ message: 'Article has been successfully created', data: result });

        } catch (error) {

            response.status(500).json(error.toString());

        };
    },

    editArticle: async (request, response, next) => {

        try {

            const articleId = request.params.id;

            const article = {};

            // on récupère les éléments transmis dans request body
            for (const input in request.body) {

                // on exclue les champs vides
                if (request.body[input] !== '') {
                    article[input] = request.body[input];
                };

            };

            // fin d'éxécution si aucune modification
            if (utility.isEmpty(article)) {

                return response.status(400).json('Fields are all empty.');

            };

            // création du slug si le titre a été modifié
            if (article.title) {

                article.slug = slugify(article.title, { remove: /[*+~.()'"!:@]/g, lower: true });

            };

            // création de l'excerpt si le content a été modifié
            if (article.content) {

                article.excerpt = article.content.substring(0, 200) + '...';

            };

            const result = await articleDataMapper.editArticle(article, articleId);

            if (!result) {
                return response.status(400).json('Failed to edit article with id ' + articleId);
            };

            response.status(200).json({ message: 'Article has been successfully edited', data: result });

        } catch (error) {

            response.status(500).json(error.toString());
        };
    },

    deleteArticle: async (request, response, next) => {

        try {

            const articleId = request.params.id;

            const result = await articleDataMapper.deleteArticle(articleId);

            if (!result) {
                return response.status(400).json('Failed to delete article with id ' + articleId);
            };

            response.status(200).json({ message: 'Article has been successfully removed', data: result });

        } catch (error) {

            response.status(500).json(error.toString());

        };
    },

    associateClassToArticle: async (request, response, next) => {

        try {

            const articleId = request.params.id;

            const result = await articleDataMapper.associateClassToArticle(articleId, request.body.classId);

            if (!result) {
                return response.status(400).json('Association failed');
            };

            response.status(200).json({ message: 'Association has been successfully added', data: result });

        } catch (error) {

            response.status(500).json(error.toString());

        };
    },

    removeAssociationClassToArticle: async (request, response, next) => {

        try {

            const articleId = request.params.id;

            const result = await articleDataMapper.removeAssociationClassToArticle(articleId, request.body.classId);

            if (!result) {
                return response.status(400).json('Failed to remove association');
            }

            response.status(200).json({ message: 'Association has been successfully removed', data: result });

        } catch (error) {

            response.status(500).json(error.toString());

        };
    }

};