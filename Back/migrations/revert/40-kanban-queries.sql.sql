-- Revert omyprof:40-kanban-queries.sql from pg

BEGIN;

DROP FUNCTION "kanban".get_all_kanbans();

DROP FUNCTION "kanban".get_all_kanbans_by_class(INT);

DROP FUNCTION "kanban".get_one_kanbans_by_id(INT);

DROP TYPE "kanban".constructed_kanban;

DROP FUNCTION "kanban".create_kanban(TEXT, TEXT, TEXT, TEXT, INT);

DROP FUNCTION "kanban".update_kanban(INT, TEXT, TEXT, TEXT, TEXT);

COMMIT;
