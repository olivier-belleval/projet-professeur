const client = require('../redis/cached-client');

module.exports = {

    // affiche seulement les articles qui ont une classe attribuée (admin - page d'acceuil)
    getAllArticlesWithClass: async () => {

        const preparedQuery = {
            text: `SELECT * FROM get_articles_with_associated_class()`
        };

        const result = await client.query(preparedQuery);

        // retourne tous les articles
        return result.rows;

    },

    // affiche tous les articles avec ou sans classe attribuée (admin - liste des articles depuis l'espace admin)
    getAllArticlesWithOrWithoutClass: async () => {

        const preparedQuery = {
            text: `SELECT * FROM get_articles_without_associated_class()`
        };

        const result = await client.query(preparedQuery);

        // retourne tous les articles
        return result.rows;

    },

    // affiche tous les articles d'une classe concernée
    getArticlesByClass: async (classId) => {

        const preparedQuery = {
            text: `SELECT * FROM get_articles_by_class($1)`,
            values: [classId]
        };

        const result = await client.query(preparedQuery);

        // retourne tous les articles concernant la classe donnée
        return result.rows;

    },

    // afficher un article grâce à son id
    getOneArticle: async (articleId) => {

        const preparedQuery = {
            text: `SELECT * FROM get_article_by_id($1)`,
            values: [articleId]
        };

        const result = await client.query(preparedQuery);

        // retourne tous les articles concernant la classe donnée
        return result.rows[0];

    },

    // création d'un article
    createOneArticle: async (article) => {

        const preparedQuery = {
            text: `SELECT * FROM create_article($1, $2, $3, $4, $5)`,
            values: [article.title, article.slug, article.excerpt, article.content, article.teacherId]
        };

        const result = await client.query(preparedQuery);

        // retourne l'article qui vient d'être créé
        return result.rows[0];

    },

    // modification d'un article
    editArticle: async (article, articleId) => {

        const preparedQuery = {

            text: `SELECT * FROM edit_article($1, $2, $3, $4, $5)`,
            values: [articleId, article.title, article.slug, article.excerpt, article.content]
            
        };

        const result = await client.query(preparedQuery);

        return result.rows[0];

    },

    // suppression d'un article
    deleteArticle: async (articleId) => {


        const preparedQuery = {
            text: `SELECT * FROM delete_article($1)`,
            values: [articleId]
        };

        const result = await client.query(preparedQuery);

        if (!result.rows[0].id) {
            return;
        };

        return result.rows[0];

    },

    // associer une classe et un article
    associateClassToArticle: async (articleId, className) => {

        try {

            const preparedQuery = {
                text: `SELECT * FROM associate_class_to_article($1, $2)`,
                values: [articleId, className]
            };

            const result = await client.query(preparedQuery);

            return result.rows[0];

        } catch (error) {

            return;

        };
    },

    // supprimer l'association d'une classe et d'un article
    removeAssociationClassToArticle: async (articleId, className) => {

        try {

            const preparedQuery = {
                text: `SELECT * FROM remove_class_to_article_association($1, $2)`,
                values: [articleId, className]
            };

            const result = await client.query(preparedQuery);

            // si l'article ou la classe n'existent pas
            if (!result.rows[0].id) {
                return;
            };

            return result.rows[0];

        } catch (error) {

            return;

        };
    }

};



