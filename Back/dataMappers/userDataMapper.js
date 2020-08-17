const client = require('./client');
const bcrypt = require('bcrypt');



module.exports = {

    checkClass: async (username, password) => {

        // client.query pour récupérer infos contenu en bdd
        const result = await client.query('SELECT * FROM "omyprof"."class" c WHERE c.username = $1', [username]);

        // fin d'éxécution si aucun résultat
        if(!result) {
            console.log('pas de username correspondant');
        }
        
        // on stocke le password stocké en bdd
        const passwordFromDatabase = result.rows[0].password;

        // et on le compare au password reçu en request.body
        const comparisonResult =  bcrypt.compareSync(password, passwordFromDatabase);

        // fin d'éxécution si les passwords ne correspondent pas - retourne undefined
        if (!comparisonResult) {
            return; 
        }

        // si les deux mdp correspondent, on retourne la classe (et surtout son id et son nom)
        // on n'oublie pas de supprimer le mdp dans la réponse, pour des questions de sécurité
        delete result.rows[0].password;
        return result.rows[0];

    },

    createClass: async () => {

        const clear = 'test';

        const hashedpwd = await bcrypt.hash(clear, 9);

        console.log(hashedpwd);

        await client.query(`INSERT INTO "omyprof"."class" ("username", "description", "password", "teacher_id") VALUES ('gegege', 'gegege', $1, 1)`, [hashedpwd]);

    },


}