const client = require('./client');

module.exports = {

    getAllArticlesWithClass: async () => {

        const preparedQuery = `SELECT
        a.id AS article_id,
        a.title AS article_title,
        a.excerpt AS article_excerpt,
        string_agg(distinct c.username, ', ' ORDER BY c.username) AS class_name,
        t.first_name || ' ' || t.last_name AS article_author
        FROM "article"."article" a
        JOIN "article"."m2m_article_class" m2m ON a.id = m2m.article_id
        JOIN "omyprof"."class" c ON m2m.class_id = c.id
        JOIN "omyprof"."teacher" t ON a.teacher_id = t.id
        GROUP BY a.id, a.title, a.excerpt, article_author`;

        const result = await client.query(preparedQuery);

        // fin d'execution si aucun article n'est trouvé - undefined
        if (!result) {
            return;
        }

        // retourne tous les articles
        return result.rows;
    },

    getArticlesByClass: async (classId) => {

        const preparedQuery = {
            text: `SELECT
		    a.id AS article_id,
		    a.title AS article_title,
		    a.excerpt AS article_excerpt,
		    string_agg(distinct c.username, ', ' ORDER BY c.username) AS class_name,
		    t.first_name || ' ' || t.last_name AS article_author
	        FROM "article"."article" a
	        JOIN "article"."m2m_article_class" m2m ON a.id = m2m.article_id
	        JOIN "omyprof"."class" c ON m2m.class_id = c.id
            JOIN "omyprof"."teacher" t ON a.teacher_id = t.id
            WHERE c.id = $1
	        GROUP BY a.id, a.title, a.excerpt, article_author`,
            values: [classId]
        };

        const result = await client.query(preparedQuery);

        // fin d'execution si aucun article n'est trouvé - undefined
        if (!result) {
            return;
        }

        // retourne tous les articles concernant la classe donnée
        return result.rows;
    },

    getOneArticle: async (articleId) => {

        const preparedQuery = {
            text: `SELECT
		a.id AS article_id,
		a.title AS article_title,
		a.content AS article_content,
		string_agg(distinct c.username, ', ' ORDER BY c.username) AS class_name,
		t.first_name || ' ' || t.last_name AS article_author
	    FROM "article"."article" a
	    JOIN "article"."m2m_article_class" m2m ON a.id = m2m.article_id
	    JOIN "omyprof"."class" c ON m2m.class_id = c.id
        JOIN "omyprof"."teacher" t ON a.teacher_id = t.id
        WHERE a.id = $1
	    GROUP BY a.id, a.title, a.content, article_author`,
            values: [articleId]
        };

        const result = await client.query(preparedQuery);

        // retourne tous les articles concernant la classe donnée
        return result.rows[0];
    },

    createOneArticle: async (article) => {

        const preparedQuery = {
            text: `INSERT INTO "article"."article" ("title", "slug", "excerpt", "content", "teacher_id") VALUES ($1, $2, $3, $4, $5) RETURNING *`,
            values: [article.title, article.slug, article.excerpt, article.content, article.teacherId]
        };

        const result = await client.query(preparedQuery);

        // retourne l'article qui vient d'être créé
        return result.rows[0];

    },

    deleteArticle: async (articleId) => {


        // requiert changements bdd (delete on cascade sur FK)

        const preparedQuery = {
            text: `DELETE FROM "article"."article" WHERE id = $1 RETURNING *`,
            values: [articleId]
        };

        const result = await client.query(preparedQuery);


        if (!result.rows[0]) {
            return;
        }

        return 'Article supprimé!';

    },

    associateClassToArticle: async (articleId, classId) => {

        try {
            const preparedQuery = {
                text: `INSERT INTO "article"."m2m_article_class" ("article_id", "class_id")
            VALUES ($1, $2)`,
                values: [articleId, classId]
            };

            const result = await client.query(preparedQuery);

            return 'Classe ajoutée à l\'article!';

        } catch (error) {

            return;
        }
    }

};