const client = require('./client');


module.exports = {

    getAllKanbans: async () => {
        
        const query = {
        text : `
            SELECT * 
            FROM "kanban".get_all_kanbans();
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
                SELECT * 
                FROM "kanban".get_all_kanbans_by_class($1)
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
                SELECT * 
                FROM "kanban".get_one_kanbans_by_id($1);
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

    createKanban: async (kanbanObject) => {
        
        const query = {
            text : `
                SELECT *
                FROM"kanban".create_kanban($1, $2, $3, $4, $5)
                `,
            values: [kanbanObject.title, kanbanObject.slug, kanbanObject.description, kanbanObject.background, kanbanObject.teacher_id]
          };

        const result = await client.query(query);

        if(!result) {
            console.log('probleme a l\'insert');
            return
        }
        return result.rows[0];
    },

    editKanban: async (kanbanObject, kanbanId) => {
        const fields = Object.keys(kanbanObject);
        const keys = Object.keys(kanbanObject);
        
        const query = {
            text: `
            SELECT * FROM "kanban".update_kanban($1,$2,$3,$4,$5)
                `
            ,
            values: [kanbanId, kanbanObject.title,kanbanObject.slug,kanbanObject.description,kanbanObject.background]
        };

        console.log('query : ', query)

        const result = await client.query(query);

        if(!result) {
            console.log('probleme a l\'insert');
            return
        }
        return result.rows[0];
    },

    deleteKanban: async (kanbanId) => {

        const query = {
            text : `
            SELECT * FROM "kanban".delete_kanban($1);
            `,
            values: [kanbanId]
          };

        const result = await client.query(query);

        if(!result) {
            console.log('probleme a l\'insert');
            return
        }
        return result;
    },

    associateClassToKanban: async (kanbanId, classId) => {

        try {
            const preparedQuery = {
                text: `INSERT INTO "kanban"."m2m_kanban_class" ("kanban_id", "class_id")
            VALUES ($1, $2)`,
                values: [kanbanId, classId]
            };

            const result = await client.query(preparedQuery);

            return 'Classe ajoutée à l\'kanban!';

        } catch (error) {

            return;
        }
    },

    removeAssociationClassToKanban: async (kanbanId, classId) => {

        try {
            const preparedQuery = {
                text: `DELETE FROM "kanban"."m2m_kanban_class" WHERE kanban_id = $1 AND class_id = $2`,
                values: [kanbanId, classId]
            };

            const result = await client.query(preparedQuery);

            return 'Association supprimée!';

        } catch (error) {
                console.log(error)
            return;
        }
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

    editList: async (listObject, listId) => {
        const fields = Object.keys(listObject);
        const keys = Object.keys(listObject);
        
        const query = {
            text: `
                UPDATE "kanban"."list" SET
                ${fields.map( (_, index) => keys[index] + ' = $' + (index+2))}
                WHERE id = $1
                RETURNING *
                `
            ,
            values: [listId, ...Object.values(listObject)]
        };

        const result = await client.query(query);

        if(!result) {
            console.log('probleme a l\'insert');
            return
        }
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

    editCard: async (cardObject, cardId) => {
        const fields = Object.keys(cardObject);
        const keys = Object.keys(cardObject);
        
        const query = {
            text: `
                UPDATE "kanban"."card" SET
                ${fields.map( (_, index) => keys[index] + ' = $' + (index+2))}
                WHERE id = $1
                RETURNING *
                `
            ,
            values: [cardId, ...Object.values(cardObject)]
        };

        const result = await client.query(query);

        if(!result) {
            console.log('probleme a l\'insert');
            return
        }
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

    getAllTags: async () => {
        
        const query = {
        text : `
        SELECT * FROM "kanban".tag;
        `
        };
        

        const result = await client.query(query);

        if(!result) {
            console.log('probleme de requette');
            return
        }
        return result.rows;
    },

    createTag: async (cardObject) => {
        
        const query = {
            text : `INSERT INTO "kanban"."tag" 
                    ("name", "color") 
                    VALUES ($1, $2) returning *`,
            values: [cardObject.name, cardObject.color]
          };

        const result = await client.query(query);

        if(!result) {
            console.log('probleme a l\'insert');
            return
        }
        console.log(result.rows[0]);
        return result.rows[0];
    },

    editTag: async (tagObject, tagId) => {
        const fields = Object.keys(tagObject);
        const keys = Object.keys(tagObject);
        
        const query = {
            text: `
                UPDATE "kanban"."tag" SET
                ${fields.map( (_, index) => keys[index] + ' = $' + (index+2))}
                WHERE id = $1
                RETURNING *
                `
            ,
            values: [tagId, ...Object.values(tagObject)]
        };
        console.log('query edit tag : ',query)

        const result = await client.query(query);

        if(!result) {
            console.log('probleme a l\'insert');
            return
        }
        console.log('result : ', result)
        return result.rows[0];
    },

    deleteTag: async (tagId) => {

        const query = {
            text : `DELETE FROM "kanban"."tag"
                    WHERE id = $1`,
            values: [tagId]
          };

        const result = await client.query(query);

        if(!result) {
            console.log('probleme a l\'insert');
            return;
        }
        return result;
    },

    createAssociationTagToCard: async (cardObject) => {
        
        const query = {
            text : `INSERT INTO "kanban"."m2m_tag_card" 
                    ("tag_id", "card_id") 
                    VALUES ($1, $2) returning *`,
            values: [cardObject.tagId, cardObject.cardId]
          };

        const result = await client.query(query);

        if(!result) {
            console.log('probleme a l\'insert');
            return
        }
        console.log(result.rows[0]);
        return result.rows[0];
    },

    deleteAssociationTagToCard: async (tagCardObject) => {

        const query = {
            text : `DELETE FROM "kanban"."m2m_tag_card"
                    WHERE tag_id = $1 AND card_id = $2`,
            values: [tagCardObject.tagId, tagCardObject.cardId]
          };

        const result = await client.query(query);

        if(!result) {
            console.log('probleme a l\'insert');
            return;
        }
        return result;
    },

    
}