const client = require('../redis/cached-client');
const bcrypt = require('bcrypt');



module.exports = {

    checkClass: async (username, password) => {

        const preparedQuery = {
            text: 'SELECT * FROM get_class_by_username($1)',
            values: [username]
        };

        const result = await client.query(preparedQuery);

        // fin d'éxécution si aucun résultat

        if(result.rowCount === 0 || result.rows[0].id === null){
            return;
        };

        // on récupère le mdp stocké en bdd et on le compare au password reçu en request.body
        const comparison =  bcrypt.compareSync(password, result.rows[0].password);

        // fin d'éxécution si comparaison KO
        if(!comparison) {
            return;
        };

        // si les deux mdp correspondent, on retourne la classe (et surtout son id et son nom)
        // on n'oublie pas de supprimer le mdp/la description/le teacher_id dans la réponse, pour des questions de sécurité

        delete result.rows[0].password;
        delete result.rows[0].teacher_id;
        delete result.rows[0].description;

        result.rows[0].state = 'class';

        return result.rows[0];

    },

    checkTeacher: async (username, password) => {

        const preparedQuery = {

            text: 'SELECT * FROM get_teacher_by_username($1)',
            values: [username]

        };

        // client.query pour récupérer infos contenu en bdd
        const result = await client.query(preparedQuery);

        // fin d'éxécution si aucun résultat
        if(result.rowCount === 0 || result.rows[0].id === null) {
            return;
        };

        // on récupère le mdp stocké en bdd et on le compare au password reçu en request.body
        const comparison =  bcrypt.compareSync(password, result.rows[0].password);

        // fin d'éxécution si comparaison KO
        if(!comparison) {
            return;
        };

        // si les deux mdp correspondent, on retourne la classe (et surtout son id et son nom)
        // on n'oublie pas de supprimer le mdp/first_name/last_name dans la réponse, pour des questions de sécurité

        delete result.rows[0].password;
        delete result.rows[0].first_name;
        delete result.rows[0].last_name;

        result.rows[0].state = 'teacher';

        return result.rows[0];

    },

    getClassesUsernames: async () => {

        const preparedQuery = {
            text: `SELECT * FROM get_all_classes_usernames()`
        };

        const result = await client.query(preparedQuery);

        return result.rows;
    }

}