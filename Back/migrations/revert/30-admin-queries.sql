-- Revert omyprof:30-admin-queries from pg

BEGIN;

DROP FUNCTION get_all_classes();

DROP FUNCTION get_class_by_id(INT);

DROP FUNCTION create_class(TEXT, TEXT, TEXT, INT);

DROP FUNCTION delete_class(INT);

DROP TYPE constructed_class;

COMMIT;
