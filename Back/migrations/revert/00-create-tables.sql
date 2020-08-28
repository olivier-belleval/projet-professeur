-- Revert omyprof:00-create-tables from pg

BEGIN;


DROP TABLE "kanban"."m2m_tag_card";
DROP TABLE "article"."m2m_article_class";
DROP TABLE "kanban"."m2m_kanban_class";

DROP TABLE "article"."article";

DROP TABLE "kanban"."tag";
DROP TABLE "kanban"."card";
DROP TABLE "kanban"."list";
DROP TABLE "kanban"."kanban";

DROP TABLE "omyprof"."class";
DROP TABLE "omyprof"."teacher" ;

DROP SCHEMA "omyprof";
DROP SCHEMA "article";
DROP SCHEMA "kanban";

COMMIT;
