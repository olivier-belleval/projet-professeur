const client = require('./client');
const bcrypt = require('bcrypt');

module.exports = {

    getAllClasses: async () => {

        const preparedQuery = `SELECT * FROM get_all_classes()`

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

        // on récupère les clés de l'objet et on les stocke dans l'array keys
        const dataKeys = Object.keys(data);
        const dataValues = Object.values(data);

        const preparedQuery = {

            // methode pour construire la requête: column1 = $1, column2 = $2, etc...
            // clés.map( (_, index) => clés[index] = $index) ce qui donne:
            // clé = $index, soit col1 = value1

            text: `UPDATE "omyprof"."class" SET
            ${dataKeys.map((_, index) => dataKeys[index] + ' = $' + (index + 2))}
            WHERE id = $1
            RETURNING *`,

            // on place les valeurs de l'objet data dans values

            values: [classId, ...dataValues]
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