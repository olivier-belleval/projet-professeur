-- Deploy omyprof:20-article-queries to pg

BEGIN;

-- fonction pour afficher tous les articles avec une classe associée

CREATE TYPE article_search_admin AS ("article_id" INT, "article_title" TEXT, "article_slug" TEXT, "article_excerpt" TEXT, "article_author" TEXT, "class_username" JSON);

CREATE FUNCTION get_articles_with_associated_class () RETURNS SETOF article_search_admin AS
$$
	SELECT 
		a.id AS article_id, 
		a.title AS article_title, 
		a.slug article_slug, 
		a.excerpt article_excerpt, 
		t.first_name || ' ' || t.last_name AS article_author,
		COALESCE(json_agg(c.username) FILTER (WHERE c.username IS NOT NULL), null) AS class_username
		FROM "article"."article" a
			JOIN "article"."m2m_article_class" m2m ON a.id = m2m.article_id
			JOIN "omyprof"."class" c ON m2m.class_id = c.id
			JOIN "omyprof"."teacher" t ON a.teacher_id = t.id
		GROUP BY a.id, a.title, a.slug, a.excerpt, article_author
		ORDER BY article_id DESC;
$$
LANGUAGE SQL STRICT;

-- fonction pour afficher tous les articles, y compris ceux sans classe associée

CREATE FUNCTION get_articles_without_associated_class() RETURNS SETOF article_search_admin AS
$$
	SELECT 
        a.id AS article_id, 
        a.title AS article_title, 
        a.slug article_slug, 
        a.excerpt article_excerpt, 
        t.first_name || ' ' || t.last_name AS article_author,
        COALESCE(json_agg(c.username) FILTER (WHERE c.username IS NOT NULL), null) AS class_username
        FROM "article"."article" a
        LEFT JOIN "article"."m2m_article_class" m2m ON a.id = m2m.article_id
        LEFT JOIN "omyprof"."class" c ON m2m.class_id = c.id
        LEFT JOIN "omyprof"."teacher" t ON a.teacher_id = t.id
        GROUP BY a.id, a.title, a.slug, a.excerpt, article_author
        ORDER BY article_id DESC
$$
LANGUAGE SQL STRICT;

-- fonction pour afficher les articles concernant une classe

CREATE TYPE article_search_class AS ("article_id" INT, "article_title" TEXT, "article_slug" TEXT, "article_excerpt" TEXT, "class_username" TEXT,"article_author" TEXT);

CREATE FUNCTION get_articles_by_class(classId INT) RETURNS SETOF article_search_class AS
$$
    SELECT
		a.id AS article_id,
		a.title AS article_title,
        a.slug AS article_slug,
		a.excerpt AS article_excerpt,
		c.username AS class_username,
		t.first_name || ' ' || t.last_name AS article_author
	    FROM "article"."article" a
	    LEFT JOIN "article"."m2m_article_class" m2m ON a.id = m2m.article_id
	    LEFT JOIN "omyprof"."class" c ON m2m.class_id = c.id
        LEFT JOIN "omyprof"."teacher" t ON a.teacher_id = t.id
        WHERE c.id = classId
        ORDER BY article_id DESC
$$
LANGUAGE SQL STRICT;

-- fonction pour afficher un article grâce à son id

CREATE TYPE article AS ("article_id" INT, "article_title" TEXT, "article_content" TEXT, "class_username" JSON,"article_author" TEXT);

CREATE FUNCTION get_article_by_id(articleId INT) RETURNS SETOF article AS
$$
SELECT 
        a.id AS article_id, 
        a.title AS article_title, 
		a.content AS article_content,
        COALESCE(json_agg(c.username) FILTER (WHERE c.username IS NOT NULL), null) AS class_username,
        t.first_name || ' ' || t.last_name AS article_author
        FROM "article"."article" a
        LEFT JOIN "article"."m2m_article_class" m2m ON a.id = m2m.article_id
        LEFT JOIN "omyprof"."class" c ON m2m.class_id = c.id
        LEFT JOIN "omyprof"."teacher" t ON a.teacher_id = t.id
		WHERE a.id = articleId
        GROUP BY a.id, a.title, a.content, article_author;
$$
LANGUAGE SQL STRICT;

-- fonction pour créer un article

CREATE FUNCTION create_article(title TEXT, slug TEXT, excerpt TEXT, content TEXT, teacherId INT) RETURNS "article"."article" AS
$$
    INSERT INTO "article"."article" ("title", "slug", "excerpt", "content", "teacher_id") VALUES (title, slug, excerpt, content, teacherId) RETURNING *;
$$
LANGUAGE SQL STRICT;

-- fonction pour supprimer un article

CREATE FUNCTION delete_article(articleId INT) RETURNS "article"."article" AS
$$
    DELETE FROM "article"."article" WHERE id = $1 RETURNING *;
$$
LANGUAGE SQL STRICT;

-- fonction pour associer une classe à un article

CREATE FUNCTION associate_class_to_article(articleId INT, classId INT) RETURNS "article"."m2m_article_class" AS
$$
    INSERT INTO "article"."m2m_article_class" ("article_id", "class_id") VALUES (articleId, classId) RETURNING *;
$$
LANGUAGE SQL STRICT;

-- fonction pour supprimer l'association d'une classe et du'n article

CREATE FUNCTION remove_class_to_article_association(articleId INT, classId INT) RETURNS "article"."m2m_article_class" AS
$$
    DELETE FROM "article"."m2m_article_class" WHERE article_id = articleId AND class_id = classId RETURNING *;
$$
LANGUAGE SQL STRICT;


COMMIT;
