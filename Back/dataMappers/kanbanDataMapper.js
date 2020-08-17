const client = require('./client');


module.exports = {


    createKanban: async (kanbanObject) => {

        const result = await client.query(`INSERT INTO "kanban"."kanban" ("title", "slug", "description", "background", "teacher_id") VALUES ($1, $2, $3, $4, $5) returning *`, [kanbanObject.title, kanbanObject.slug, kanbanObject.description, kanbanObject.background, kanbanObject.teacher_id]);

        if(!result) {
            console.log('probleme a l\'insert');
            return
        }
        console.log(result.rows[0]);
        return result.rows[0];
    },


}