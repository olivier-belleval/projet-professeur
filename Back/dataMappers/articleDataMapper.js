const client = require('./client');

module.exports = {

    getAllArticles: async () => {

        const preparedQuery = `SELECT
        a.id AS article_id,
        a.title AS article_title,
        a.content AS article_content,
        string_agg(distinct c.username, ', ' ORDER BY c.username) AS class_name,
        t.first_name || ' ' || t.last_name AS article_author
        FROM "article"."article" a
        JOIN "article"."m2m_article_class" m2m ON a.id = m2m.article_id
        JOIN "omyprof"."class" c ON m2m.class_id = c.id
        JOIN "omyprof"."teacher" t ON a.teacher_id = t.id
        GROUP BY a.id, a.title, a.content, article_author`;

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
		a.content AS article_content,
		string_agg(distinct c.username, ', ' ORDER BY c.username) AS class_name,
		t.first_name || ' ' || t.last_name AS article_author
	    FROM "article"."article" a
	    JOIN "article"."m2m_article_class" m2m ON a.id = m2m.article_id
	    JOIN "omyprof"."class" c ON m2m.class_id = c.id
        JOIN "omyprof"."teacher" t ON a.teacher_id = t.id
        WHERE c.id = $1
	    GROUP BY a.id, a.title, a.content, article_author`,
        values: [classId]
        };
        
        const result = await client.query(preparedQuery);

        // fin d'execution si aucun article n'est trouvé - undefined
        if (!result) {
            return;
        }

        // retourne tous les articles concernant la classe donnée
        return result.rows;
    }

};