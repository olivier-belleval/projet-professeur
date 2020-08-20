BEGIN;
        
    CREATE MATERIALIZED VIEW "kanban".kanban_list_card_tag 
    AS 
    SELECT 
        ka.id AS kanban_id, 
        ka.title AS kanban_title, 
        ka.slug AS kanban_slug, 
        ka.description AS kanban_description, 
        ka.background AS kanban_background, 
        li.id AS list_id, li.name AS list_name, 
        li.order AS list_order, ca.id AS card_id, 
        ca.description AS card_description, 
        ca.order AS card_order, 
        ca.color AS card_color, 
        ta.id AS tag_id, 
        ta.name AS tag_name, 
        ta.color AS tag_color 
    FROM "kanban"."kanban" ka 
    LEFT JOIN "kanban"."list" li ON li.kanban_id = ka.id 
    LEFT JOIN "kanban"."card" ca ON ca.list_id = li.id 
    LEFT JOIN "kanban"."m2m_tag_card" ta_ca ON ta_ca.card_id = ca.id 
    LEFT JOIN "kanban"."tag" ta ON ta.id = ta_ca.tag_id;

    CREATE INDEX idx_kanban_list_card_tag 
    ON "kanban".kanban_list_card_tag(kanban_id);

COMMIT;