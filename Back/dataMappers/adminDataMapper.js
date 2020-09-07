const client = require('../redis/cached-client');
const bcrypt = require('bcrypt');

module.exports = {

    getAllClasses: async () => {

        const preparedQuery = `SELECT * FROM get_all_classes()`

        const result = await client.query(preparedQuery);

        return result.rows;

    },

    getAllArticlesWithoutClasses: async () => {

        const preparedQuery = `SELECT * FROM get_articles_without_associated_class()`;

        const result = await client.query(preparedQuery);

        return result.rows;

    },

    getOneClass: async (classId) => {

        const preparedQuery = {
            text: `SELECT * FROM get_class_by_id($1)`,
            values: [classId]
        };

        const result = await client.query(preparedQuery);

        return result.rows[0];

    },

    createClass: async (data) => {

        const hashedPassword = bcrypt.hashSync(data.password, 9);

        const preparedQuery = {
            text: `SELECT * FROM create_class($1, $2, $3, $4)`,
            values: [data.username, hashedPassword, data.description, data.teacherId]
        };

        const result = await client.query(preparedQuery);

        delete result.rows[0].password;

        return result.rows[0];

    },

    editClass: async (data, classId) => {

        const preparedQuery = {

            text: `SELECT * FROM edit_class($1, $2, $3)`,
            values: [classId, data.username, data.description]
            
        };

        const result = await client.query(preparedQuery);

        // si une classe avec un nom identique existe déjà - retourne undefined
        if(result.rowCount === 0) {
            return;
        };

        delete result.rows[0].password;

        return result.rows[0];

    },

    deleteClass: async (classId) => {

        const preparedQuery = {
            text: `SELECT * FROM delete_class($1)`,
            values: [classId]
        };

        const result = await client.query(preparedQuery);

        if (!result.rows[0].id) {
            return;
        };

        return result.rows[0];

    }

};