-- Deploy omyprof:40-kanban-queries.sql to pg

BEGIN;

-- function to get all kanbans and their dependencies

CREATE TYPE "kanban".constructed_kanban AS (
	"kanban_id" INT, 
	"kanban_title" TEXT, 
	"kanban_slug" TEXT,
	"kanban_description" TEXT, 
	"kanban_background" TEXT, 
	"teacher_id" INT,
	"teacher_username" TEXT, 
	"teacher_first_name" TEXT, 
	"teacher_last_name" TEXT,
	"class_id" INT, 
	"class_username" TEXT, 
	"class_description" TEXT, 
	"list_id" INT,
	"list_name" TEXT, 
	"list_order" INT, 
	"card_id" INT, 
	"card_description" TEXT, 
	"card_order" INT, 
	"card_color" TEXT,  
	"tag_id" INT, 
	"tag_name" TEXT, 
	"tag_color" TEXT, 
	"m2m_tag_id" INT, 
	"m2m_card_id" INT );

-- function to get all kanbans and their dependencies

CREATE FUNCTION "kanban".get_all_kanbans() RETURNS SETOF "kanban".constructed_kanban AS
$$
SELECT 
	ka.id AS kanban_id, 
	ka.title AS kanban_title, 
	ka.slug AS kanban_slug, 
	ka.description AS kanban_description, 
	ka.background AS kanban_background,
	te.id AS teacher_id,
	te.username AS teacher_username,
	te.first_name AS teacher_first_name,
	te.last_name AS teacher_last_name,
	cl.id AS class_id,
	cl.username AS class_username,
	cl.description AS class_description,
	li.id AS list_id, 
	li.name AS list_name, 
	li.order AS list_order, 
	ca.id AS card_id, 
	ca.description AS card_description, 
	ca.order AS card_order, 
	ca.color AS card_color,
	ta.id AS tag_id, 
	ta.name AS tag_name, 
	ta.color AS tag_color, 
	ta_ca.tag_id AS m2m_tag_id,
	ta_ca.card_id AS m2m_card_id
FROM "kanban"."kanban" ka 
LEFT JOIN "kanban"."list" li ON li.kanban_id = ka.id 
LEFT JOIN "omyprof"."teacher" te ON ka.teacher_id = te.id 
LEFT JOIN "kanban"."m2m_kanban_class" ka_cl ON ka_cl.kanban_id = ka.id 
LEFT JOIN "omyprof"."class" cl ON ka_cl.class_id = cl.id 
LEFT JOIN "kanban"."card" ca ON ca.list_id = li.id 
LEFT JOIN "kanban"."m2m_tag_card" ta_ca ON ta_ca.card_id = ca.id 
LEFT JOIN "kanban"."tag" ta ON ta.id = ta_ca.tag_id;
$$

LANGUAGE SQL STRICT;

-- function to get all kanbans and their dependencies for a class

CREATE FUNCTION "kanban".get_all_kanbans_by_class(classId INT) RETURNS SETOF "kanban".constructed_kanban AS
$$
SELECT * 
FROM "kanban".get_all_kanbans() 
WHERE class_id = classId;
$$

LANGUAGE SQL STRICT;

-- function to get one kanban by id

CREATE FUNCTION "kanban".get_one_kanbans_by_id(kanbanId INT) RETURNS SETOF "kanban".constructed_kanban AS
$$
SELECT * 
FROM "kanban".get_all_kanbans() 
WHERE kanban_id = kanbanId;
$$

LANGUAGE SQL STRICT;

-- function to create a kanban

CREATE FUNCTION "kanban".create_kanban(kanbanTitle TEXT, kanbanSlug TEXT, kanbanDescription TEXT, kanbanBackground TEXT, kanbanTeacherId INT) RETURNS SETOF "kanban".kanban AS
$$
INSERT INTO "kanban"."kanban" 
    ("title", "slug", "description", "background", "teacher_id") 
VALUES ($1, $2, $3, $4, $5) returning *;
$$

LANGUAGE SQL STRICT;

-- function to edite a kanban

CREATE OR REPLACE
FUNCTION "kanban".update_kanban(kanbanId INT, kanbanTitle TEXT, kanbanSlug TEXT, kanbanDescription TEXT, kanbanBackground TEXT)
RETURNS "kanban".kanban AS
$$
UPDATE "kanban".kanban SET
	"title" = COALESCE(kanbanTitle, "title", 'false'),
	"slug" = COALESCE(kanbanSlug, "slug", 'false', 'false'),
	"description" = COALESCE(kanbanDescription, "description", 'false'),
	"background" = COALESCE(kanbanBackground, "background", 'false')
WHERE id = kanbanId
RETURNING *;
$$ 
LANGUAGE SQL;

-- function to delete a kanban

CREATE FUNCTION "kanban".delete_kanban(kanbanId INT) RETURNS SETOF "kanban".kanban AS
$$
DELETE FROM "kanban"."kanban"
WHERE id = kanbanId returning *;
$$

LANGUAGE SQL STRICT;

COMMIT;
