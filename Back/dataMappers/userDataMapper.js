const client = require('./client');
const bcrypt = require('bcrypt');



module.exports = {

    checkClass: async (username, password) => {

        // client.query pour récupérer infos contenu en bdd
        const result = await client.query('SELECT * FROM "omyprof"."class" c WHERE c.username = $1', [username]);

        // fin d'éxécution si aucun résultat
        if(!result) {
            console.log('pas de username correspondant');
            return;
        }
        
        // on stocke le password stocké en bdd
        const passwordFromDatabase = result.rows[0].password;

        // et on le compare au password reçu en request.body
        const comparison =  bcrypt.compareSync(password, passwordFromDatabase);

        // fin d'éxécution si les passwords ne correspondent pas - retourne undefined
        if (!comparison) {
            return; 
        }

        // si les deux mdp correspondent, on retourne la classe (et surtout son id et son nom)
        // on n'oublie pas de supprimer le mdp dans la réponse, pour des questions de sécurité
        delete result.rows[0].password;
        result.rows[0].state = 'student';
        return result.rows[0];

    },

    checkTeacher: async (username, password) => {

        // client.query pour récupérer infos contenu en bdd
        const result = await client.query('SELECT * FROM "omyprof"."teacher" t WHERE t.username = $1', [username]);

        // fin d'éxécution si aucun résultat
        if(!result) {
            console.log('pas de username correspondant');
            return;
        }
        
        // on stocke le password stocké en bdd
        const passwordFromDatabase = result.rows[0].password;

        // et on le compare au password reçu en request.body
        const comparison =  bcrypt.compareSync(password, passwordFromDatabase);

        // fin d'éxécution si les passwords ne correspondent pas - retourne undefined
        if (!comparison) {
            return; 
        }

        // si les deux mdp correspondent, on retourne la classe (et surtout son id et son nom)
        // on n'oublie pas de supprimer le mdp dans la réponse, pour des questions de sécurité
        delete result.rows[0].password;
        result.rows[0].state = 'teacher';
        return result.rows[0];

    },

    // méthode de test (création d'une classe avec pwd encrypté)
    createClass: async () => {

        const pwd = 'test';

        const hashedpwd = await bcrypt.hash(clear, 9);

        console.log(pwd, ' : ', hashedpwd);

        await client.query(`INSERT INTO "omyprof"."class" ("username", "description", "password", "teacher_id") VALUES ('gegege', 'gegege', $1, 1)`, [hashedpwd]);

    },

    // méthode de test (création d'un admin avec pwd encrypté)
    createAdmin: async () => {

        const pwd = 'admintest';

        const hashedpwd = await bcrypt.hash(clear, 9);

        console.log(pwd, ' : ', hashedpwd);

        await client.query(`INSERT INTO "omyprof"."teacher" ("username", "password") VALUES ('admintest', $1)`, [hashedpwd]);

    },


}