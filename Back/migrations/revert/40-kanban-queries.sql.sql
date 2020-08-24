-- Revert omyprof:40-kanban-queries.sql from pg

BEGIN;

DROP FUNCTION "kanban".get_all_kanbans();



DROP TYPE "kanban".constructed_kanban;

COMMIT;
