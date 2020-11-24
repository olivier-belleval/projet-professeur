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
    
            return result.rows;
    },

    getOneKanbansById: async (kanbanId) => {
        const query = {
            text : `
                SELECT * 
                FROM "kanban".get_one_kanban_by_id($1);
                `,
            values: [kanbanId]
        };
        
        const result = await client.query(query);

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

        return result.rows[0];
    },

    editKanban: async (kanbanObject) => {
        
        const query = {
            text: `
                SELECT * FROM "kanban".update_kanban($1,$2,$3,$4,$5)
                `,
            values: [kanbanObject.kanbanId, kanbanObject.title,kanbanObject.slug,kanbanObject.description,kanbanObject.background]
        };


        const result = await client.query(query);

        if (!result.rows[0].id) {
            
            return;
        };


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

        if (!result.rows[0]) {
            
            return;
        };

        return result;
    },

    associateClassToKanban: async (kanbanId, classId) => {

        try {

            const preparedQuery = {
                text: `
                    SELECT * 
                    FROM "kanban".associate_class_to_kanban($1, $2)
                    `,
                values: [kanbanId, classId]
            };

            const result = await client.query(preparedQuery);

            return result.rows[0];

        } catch (error) {

            return;
        }
    },

    removeAssociationClassToKanban: async (kanbanId, classId) => {

        try {

            const query = {
                text: `
                    SELECT * 
                    FROM "kanban".remove_association_class_to_kanban($1, $2)
                    `,
                values: [kanbanId, classId]
            };

            const result = await client.query(query);

            if (!result.rows[0].id) {
                return;
            };

            return result.rows[0];

        } catch (error) {

            return;
        }
    },

    getOneListById: async (listId) => {
        
        const query = {
            text : `
                SELECT * 
                FROM "kanban".get_one_list_by_id($1);
                `,
            values: [listId]
        };
        
        console.log('query : ', query)
        const result = await client.query(query);

        return result.rows[0];
    },

    createList: async (listObject) => {
        
        const query = {
            text : `
                SELECT *
                FROM "kanban".create_list($1, $2, $3)
                `,
            values: [listObject.name, listObject.order, listObject.kanban_id]
          };

        const result = await client.query(query);

        return result.rows[0];
    },

    editList: async (listObject) => {
        
        const query = {
            text: `
                SELECT *
                FROM "kanban".update_list($1, $2, $3)
                `,
            values: [listObject.list_id, listObject.name, listObject.order]
        };

        const result = await client.query(query);

        if (!result.rows[0].id) {
            
            return;
        };

        return result.rows[0];
    },

    deleteList: async (listId) => {
        const query = {
            text : `
                SELECT *
                FROM "kanban".delete_list($1)
                `,
            values: [listId]
          };

        const result = await client.query(query);

        if (!result.rows[0]) {
            return;
        };

        return result;
    },

    getOneCardById: async (listId, cardId) => {
        
        const query = {
            text : `
                SELECT * 
                FROM "kanban".get_one_card_by_id($1, $2);
                `,
            values: [listId, cardId]
        };
        
        const result = await client.query(query);

        return result.rows[0];
    },

    createCard: async (cardObject) => {
        
        const query = {
            text : `
                SELECT *
                FROM "kanban".create_card($1, $2, $3, $4)
                `,
            values: [cardObject.description, cardObject.order, cardObject.color, cardObject.list_id]
          };

        const result = await client.query(query);

        return result.rows[0];
    },

    editCard: async (cardObject, cardId) => {
        
        const query = {
            text: `
                SELECT *
                FROM "kanban".update_card($1, $2, $3, $4, $5)
                `,
            values: [cardObject.card_id, cardObject.description, cardObject.order, cardObject.color, cardObject.list_id]
        };

        const result = await client.query(query);

        if (!result.rows[0].id) {
            
            return;
        };

        return result.rows[0];
    },

    deleteCard: async (cardId) => {

        const query = {
            text : `
                SELECT *
                FROM "kanban".delete_card($1) 
                `,
            values: [cardId]
          };

        const result = await client.query(query);

        if (!result.rows[0]) {
            
            return;
        };

        return result;
    },

    getAllTags: async () => {
        
        const query = {
        text : `
            SELECT * 
            FROM "kanban".get_all_tag() ;
            `
        };
        
        const result = await client.query(query);

        return result.rows;
    },

    getOneTagById: async (tagId) => {
        
        const query = {
            text : `
                SELECT * 
                FROM "kanban".get_one_tag($1);
                `,
            values: [tagId]
        };
        
        const result = await client.query(query);

        return result.rows[0];
    },

    createTag: async (cardObject) => {
        
        const query = {
            text : `
                SELECT *
                FROM "kanban".create_tag($1, $2) 
                `,
            values: [cardObject.name, cardObject.color]
          };

        const result = await client.query(query);

        return result.rows[0];
    },

    editTag: async (tagObject, tagId) => {
        
        const query = {
            text: `
                SELECT *
                FROM "kanban".update_tag($1, $2, $3)
                `,
            values: [tagObject.tagId, tagObject.name, tagObject.color]
        };

        const result = await client.query(query);

        if (!result.rows[0].id) {
            
            return;
        };

        return result.rows[0];
    },

    deleteTag: async (tagId) => {

        const query = {
            text : `
                SELECT *
                FROM "kanban".delete_tag($1)
                `,
            values: [tagId]
          };

          const result = await client.query(query);

          if (!result.rows[0]) {
              return;
          };
  
          return result;
    },

    createAssociationTagToCard: async (cardObject) => {

        try {

            const query = {
                text : `
                    SELECT *
                    FROM "kanban".associate_tag_to_card($1, $2) 
                    `,
                values: [cardObject.cardId, cardObject.tagId]
            };

            const result = await client.query(query);

            return result.rows[0];

        } catch (error) {
            
            return;
        }
        
        
    },

    deleteAssociationTagToCard: async (tagCardObject) => {

        try {
            const query = {
                text : `
                    SELECT *
                    FROM "kanban".remove_association_tag_to_card($1, $2)
                    `,
                values: [tagCardObject.cardId, tagCardObject.tagId]
            };

            const result = await client.query(query);

            if (!result.rows[0]) {
                return;
            };

            return result.rows[0];

        } catch (error) {

            return;
        }

        
    },

    
}