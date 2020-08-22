-- Deploy omyprof:10-user-queries to pg

BEGIN;

-- fonction pour récupérer une classe avec un username

CREATE FUNCTION get_class_by_username (data TEXT) RETURNS "omyprof"."class" AS
$$
	SELECT * FROM "omyprof"."class" c WHERE c.username = data;
$$
LANGUAGE SQL STRICT;

-- fonction pour récupérer un teacher avec un username 

CREATE FUNCTION get_teacher_by_username (data TEXT) RETURNS "omyprof"."teacher" AS
$$
	SELECT * FROM "omyprof"."teacher" t WHERE t.username = data;
$$
LANGUAGE SQL STRICT;

-- fonction pour récupérer tous les usernames de la table omyprof.class

CREATE TYPE class_usernames_type AS ("class_usernames" JSON);

CREATE FUNCTION get_all_classes_usernames() RETURNS class_usernames_type AS
$$
SELECT json_agg(c.username) AS class_usernames FROM "omyprof"."class" c;
$$
LANGUAGE SQL STRICT;




COMMIT;
