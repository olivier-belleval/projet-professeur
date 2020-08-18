const client = require('./client');


module.exports = {


    createKanban: async (kanbanObject) => {
        
        const query = {
            text : `INSERT INTO "kanban"."kanban" 
                    ("title", "slug", "description", "background", "teacher_id") 
                    VALUES ($1, $2, $3, $4, $5) returning *`,
            values: [kanbanObject.title, kanbanObject.slug, kanbanObject.description, kanbanObject.background, kanbanObject.teacher_id]
          };

        const result = await client.query(query);

        if(!result) {
            console.log('probleme a l\'insert');
            return
        }
        console.log(result.rows[0]);
        return result.rows[0];
    },

    getAllKanbans: async () => {
        
        const query = {
        text : `
        SELECT * FROM "kanban".kanban;
        `
        };
        

        const result = await client.query(query);

        if(!result) {
            console.log('probleme de requette');
            return
        }
        return result.rows;
    },

    getAllKanbansByClass: async (classId) => {
        const query = {
            text : `
                SELECT ka.id,
                    ka.title,
                    ka.description,
                    te.first_name || ' ' || te.last_name AS article_author,
                    string_agg(distinct cl.username, ', ' ORDER BY cl.username) AS class_username
                FROM "kanban".kanban ka
                LEFT JOIN "kanban"."m2m_kanban_class" ka_cl 
                    ON ka_cl.kanban_id = ka.id
                LEFT JOIN "omyprof"."class" cl
                    ON cl.id = ka_cl.class_id
                LEFT JOIN "omyprof"."teacher" te
                    ON te.id = ka.teacher_id
                WHERE cl.id = $1
                GROUP BY ka.id,cl.username, te.first_name, te.last_name;
            `,
            values: [classId]
            };
            
            const result = await client.query(query);
    
            if(!result) {
                console.log('probleme de requette');
                return
            }
            return result.rows;
    },

    getOneKanbansById: async (kanbanId) => {
        
        const query = {
            text : `
                SELECT 
                    ka.id AS kanban_id,
                    ka.background AS kanban_background,
                    li.id AS list_id,
                    li.name AS list_name,
                    li.order AS list_order,
                    ca.id AS card_id,
                    ca.description AS card_description,
                    ca.order AS card_order,
                    ca.color AS card_color,
                    ta.id AS tag_id,
                    ta.name AS tag_name,
                    ta.color AS tag_color
                FROM "kanban"."kanban" ka
                LEFT JOIN  "kanban"."list" li ON li.kanban_id = ka.id
                LEFT JOIN "kanban"."card" ca ON ca.list_id = li.id 
                LEFT JOIN "kanban"."m2m_tag_card" ta_ca ON ta_ca.card_id = ca.id 
                LEFT JOIN "kanban"."tag" ta ON ta.id = ta_ca.tag_id
                WHERE ka.id = $1
                ORDER BY li.name;
                `,
            values: [kanbanId]
        };
        
        const result = await client.query(query);

        if(!result) {
            console.log('probleme de requette');
            return;
        }
        return result.rows;
    },

    deleteKanban: async (kanbanId) => {

        const query = {
            text : `DELETE FROM "kanban"."kanban"
                    WHERE id = $1`,
            values: [kanbanId]
          };

        const result = await client.query(query);

        if(!result) {
            console.log('probleme a l\'insert');
            return
        }
        return;
    },

    createList: async (listObject) => {
        
        const query = {
            text : `INSERT INTO "kanban"."list" 
                    ("name", "order", "kanban_id") 
                    VALUES ($1, $2, $3) returning *`,
            values: [listObject.name, listObject.order, listObject.kanban_id]
          };

        const result = await client.query(query);

        if(!result) {
            console.log('probleme a l\'insert');
            return
        }
        console.log(result.rows[0]);
        return result.rows[0];
    },

    deleteList: async (listId, kanbanId) => {
        const query = {
            text : `DELETE FROM "kanban"."list"
                    WHERE id = $1`,
            values: [listId]
          };

        const result = await client.query(query);

        if(!result) {
            console.log('probleme a l\'insert');
            return;
        }
        return result;
    },

    createCard: async (cardObject) => {
        
        const query = {
            text : `INSERT INTO "kanban"."card" 
                    ("description", "order", "color", "list_id") 
                    VALUES ($1, $2, $3, $4) returning *`,
            values: [cardObject.description, cardObject.order, cardObject.color, cardObject.list_id]
          };

        const result = await client.query(query);

        if(!result) {
            console.log('probleme a l\'insert');
            return
        }
        console.log(result.rows[0]);
        return result.rows[0];
    },

    deleteCard: async (cardId, listId) => {
        const query = {
            text : `DELETE FROM "kanban"."card"
                    WHERE id = $1`,
            values: [cardId]
          };

        const result = await client.query(query);

        if(!result) {
            console.log('probleme a l\'insert');
            return;
        }
        return result;
    },

    
}