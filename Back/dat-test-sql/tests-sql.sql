-- vue pour afficher tous les articles (+ les classes attribuées et l'auteur)

CREATE VIEW get_all_articles AS
	SELECT
		a.id AS article_id,
		a.title AS article_title,
		a.content AS article_content,
		string_agg(distinct c.username, ', ' ORDER BY c.username) AS class_name,
		t.first_name || ' ' || t.last_name AS article_author
	FROM "article"."article" a
	JOIN "article"."m2m_article_class" m2m ON a.id = m2m.article_id
	JOIN "omyprof"."class" c ON m2m.class_id = c.id
	JOIN "omyprof"."teacher" t ON a.teacher_id = t.id
	GROUP BY a.id, a.title, a.content, article_author
;


-- fonction pour afficher les articles selon la classe attribuée
-- type pour définir le format du résultat de la fonction

CREATE TYPE constructed_article AS ("article_id" INT, "article_title" TEXT, "article_content" TEXT, "class_name" TEXT, "article_author" TEXT);


CREATE FUNCTION get_articles_by_class (classId INT) RETURNS SETOF constructed_article AS
$$
	SELECT
		a.id AS article_id,
		a.title AS article_title,
		a.content AS article_content,
		string_agg(distinct c.username, ', ' ORDER BY c.username) AS class_name,
		t.first_name || ' ' || t.last_name AS article_author
	FROM "article"."article" a
	JOIN "article"."m2m_article_class" m2m ON a.id = m2m.article_id
	JOIN "omyprof"."class" c ON m2m.class_id = c.id
	JOIN "omyprof"."teacher" t ON a.teacher_id = t.id
	WHERE c.id = classId
	GROUP BY a.id, a.title, a.content, article_author
	;
$$
LANGUAGE SQL STRICT;



----------

DROP VIEW get_all_articles;
DROP FUNCTION get_articles_by_class (INT);

SELECT * FROM get_all_articles;
SELECT * FROM get_articles_by_class ('1');