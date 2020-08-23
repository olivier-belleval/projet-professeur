-- Revert omyprof:10-user-queries from pg

BEGIN;


DROP FUNCTION get_class_by_username (TEXT);

DROP FUNCTION get_teacher_by_username (TEXT);

DROP FUNCTION get_all_classes_usernames();
DROP TYPE class_usernames_type;

COMMIT;
