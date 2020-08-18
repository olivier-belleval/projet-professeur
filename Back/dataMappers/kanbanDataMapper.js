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
        SELECT * FROM "kanban".kanban_list_card_tag;
        `
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
                SELECT * FROM "kanban".kanban_list_card_tag
                WHERE kanban_id= $1;
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

}
