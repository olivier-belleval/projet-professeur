const client = require('./client');
const bcrypt = require('bcrypt');



module.exports = {

    checkClass: async (username, password) => {

        // client.query pour récupérer infos contenu en bdd

        const result = await client.query('SELECT * FROM "omyprof"."class" c WHERE c.username = $1', [username]);

        // fin d'éxécution si aucun résultat
        if(result.rowCount === 0){
            return;
        }

        // on récupère le mdp stocké en bdd et on le compare au password reçu en request.body

        const comparison =  bcrypt.compareSync(password, result.rows[0].password);

        // fin d'éxécution si comparaison KO
        if(!comparison) {
            return;
        }

        // si les deux mdp correspondent, on retourne la classe (et surtout son id et son nom)
        // on n'oublie pas de supprimer le mdp/la description/le teacher_id dans la réponse, pour des questions de sécurité

        delete result.rows[0].password;
        delete result.rows[0].teacher_id;
        delete result.rows[0].description;

        result.rows[0].state = 'class';

        return result.rows[0];

    },

    checkTeacher: async (username, password) => {

        // client.query pour récupérer infos contenu en bdd

        const result = await client.query('SELECT * FROM "omyprof"."teacher" t WHERE t.username = $1', [username]);

        // fin d'éxécution si aucun résultat

        if(result.rowCount === 0) {
            return;
        }

        // et on le compare au password reçu en request.body

        const comparison =  bcrypt.compareSync(password, result.rows[0].password);

        // fin d'éxécution si comparaison KO
        if(!comparison) {
            return;
        }

        // si les deux mdp correspondent, on retourne la classe (et surtout son id et son nom)
        // on n'oublie pas de supprimer le mdp/first_name/last_name dans la réponse, pour des questions de sécurité

        delete result.rows[0].password;
        delete result.rows[0].first_name;
        delete result.rows[0].last_name;

        result.rows[0].state = 'teacher';

        return result.rows[0];

    },

    getClassesUsernames: async () => {

        const preparedQuery = `SELECT 
        json_agg(c.username) AS class_usernames FROM "omyprof"."class" c`;

        const result = await client.query(preparedQuery);

        return result.rows[0];
    },

    // méthode de test (création d'une classe avec pwd encrypté)
    createClass: async () => {

        const pwd = 'classtest';

        const hashedpwd = await bcrypt.hash(pwd, 9);

        console.log(pwd, ' : ', hashedpwd);

        await client.query(`INSERT INTO "omyprof"."class" ("username", "description", "password", "teacher_id") VALUES ('classtest', 'classtest', $1, 1)`, [hashedpwd]);

    },

    // méthode de test (création d'un admin avec pwd encrypté)
    createAdmin: async () => {

        const pwd = 'admintest';

        const hashedpwd = await bcrypt.hash(pwd, 9);

        console.log(pwd, ' : ', hashedpwd);

        await client.query(`INSERT INTO "omyprof"."teacher" ("username", "password") VALUES ('admintest', $1)`, [hashedpwd]);

    },


}