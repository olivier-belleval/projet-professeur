-- Revert omyprof:20-article-queries from pg

BEGIN;

DROP FUNCTION get_articles_with_associated_class();
DROP FUNCTION get_articles_without_associated_class();
DROP TYPE article_search_admin;

DROP FUNCTION get_articles_by_class(INT);
DROP TYPE article_search_class;

DROP FUNCTION get_article_by_id(INT);
DROP TYPE article;

DROP FUNCTION create_article(TEXT, TEXT, TEXT, TEXT, INT);

DROP FUNCTION delete_article(INT);

DROP FUNCTION associate_class_to_article(INT, INT);

DROP FUNCTION remove_class_to_article_association(INT, INT);

COMMIT;
