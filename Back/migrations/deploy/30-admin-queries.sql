-- Deploy omyprof:30-admin-queries to pg

BEGIN;

-- fonction pour récupérer toutes les classes

CREATE TYPE constructed_class AS ("class_username" TEXT, "class_description" TEXT);

CREATE FUNCTION get_all_classes() RETURNS SETOF constructed_class AS
$$
SELECT c.username, c.description 
FROM "omyprof"."class" c;
$$

LANGUAGE SQL STRICT;

-- fonction pour récupérer une classe grâce à son id

CREATE FUNCTION get_class_by_id(classId INT) RETURNS constructed_class AS
$$
SELECT c.username, c.description 
FROM "omyprof"."class" c
WHERE c.id = classId;
$$

LANGUAGE SQL STRICT;

-- fonction pour créer une classe

CREATE FUNCTION create_class(username TEXT, pwd TEXT, descr TEXT, teacherId INT) RETURNS "omyprof"."class" AS
$$
INSERT INTO "omyprof"."class" ("username", "password", "description", "teacher_id") VALUES (username, pwd, descr, teacherId) RETURNING *;
$$

LANGUAGE SQL STRICT;

-- fonction pour supprimer une classe

CREATE FUNCTION delete_class(classId INT) RETURNS "omyprof"."class" AS
$$
DELETE FROM "omyprof"."class" WHERE id = classId RETURNING *;
$$

LANGUAGE SQL STRICT;

COMMIT;
