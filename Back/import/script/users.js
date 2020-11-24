// script pour insérer en bdd des utilisateurs avec mdp cryptés

require('dotenv').config();
const { Client } = require('pg');


const bcrypt = require('bcrypt');
const slugify = require('slugify');

const teachers = require('../data/teacher.json');
const classes = require('../data/class.json');
const articles = require('../data/article.json');
const kanbans = require('../data/kanban.json');
const lists = require('../data/list.json');
const cards = require('../data/card.json');
// const tags = require('../data/tag.json');
const articleClassRelations = require('../data/article-class.json');
const kanbanClassRelations = require('../data/kanban-class.json');
const tagCardRelations = require('../data/tag-card.json');

(async () => {

    const client = new Client();
    await client.connect();


    console.log('Cleaning database');
    await client.query('TRUNCATE TABLE "kanban"."m2m_tag_card","article"."m2m_article_class","kanban"."m2m_kanban_class","article"."article","kanban"."tag", "kanban"."card","kanban"."list","kanban"."kanban", "omyprof"."class","omyprof"."teacher"RESTART IDENTITY');


    console.log('Processing: teacher.json');

    for (let entry of teachers) {

        const encryptedPassword = await bcrypt.hash(entry.password, 10);

        const result = await client.query('INSERT INTO "omyprof"."teacher" ("username", "password", "first_name") VALUES ($1, $2, $3)', [entry.username, encryptedPassword, entry.first_name]);

    };

    console.log('Processing: class.json');

    for (let entry of classes) {

        const encryptedPassword = await bcrypt.hash(entry.password, 10);

        const result = await client.query('INSERT INTO "omyprof"."class" ("username", "password", "description", "teacher_id") VALUES ($1, $2, $3, $4)', [entry.username, encryptedPassword, entry.description, entry.teacher_id]);

    };

    console.log('Processing: article.json');

    for (let entry of articles) {

        const slug = slugify(entry.title, { remove: /[*+~.()'"!:@]/g, lower: true });
        const excerpt = entry.content.substring(0,200) + '...';

        const result = await client.query('INSERT INTO "article"."article" ("title", "slug", "content", "excerpt", "teacher_id") VALUES ($1, $2, $3, $4, $5)', [entry.title, slug, entry.content, excerpt, entry.teacher_id]);

    };

    console.log('Processing: kanban.json');

    for (let entry of kanbans) {

        const slug = slugify(entry.title, { remove: /[*+~.()'"!:@]/g, lower: true });

        const result = await client.query('INSERT INTO "kanban"."kanban" ("title", "slug", "description", "background", "teacher_id") VALUES ($1, $2, $3, $4, $5)', [entry.title, slug, entry.description, entry.background, entry.teacher_id]);

    };

    console.log('Processing: list.json');

    for (let entry of lists) {

        const result = await client.query('INSERT INTO "kanban"."list" ("name", "order", "kanban_id") VALUES ($1, $2, $3)', [entry.name, entry.order, entry.kanban_id]);

    };

    console.log('Processing: card.json');

    for (let entry of cards) {

        const result = await client.query('INSERT INTO "kanban"."card" ("description", "order", "list_id") VALUES ($1, $2, $3)', [entry.description, entry.order, entry.list_id]);

    };

    /*console.log('Processing: tag.json');

    for (let entry of tags) {

        const result = await client.query('INSERT INTO "kanban"."tag" ("name", "color") VALUES ($1, $2)', [entry.name, entry.color]);

    };*/

    console.log('Processing: article-class.json');

    for (let entry of articleClassRelations) {

        const result = await client.query('INSERT INTO "article"."m2m_article_class" ("article_id", "class_id") VALUES ($1, $2)', [entry.article_id, entry.class_id]);

    };

    console.log('Processing: kanban-class.json');

    for (let entry of kanbanClassRelations) {

        const result = await client.query('INSERT INTO "kanban"."m2m_kanban_class" ("kanban_id", "class_id") VALUES ($1, $2)', [entry.kanban_id, entry.class_id]);

    };

    /*
    console.log('Processing: tag-card.json');

    for (let entry of tagCardRelations) {

        const result = await client.query('INSERT INTO "kanban"."m2m_tag_card" ("tag_id", "card_id") VALUES ($1, $2)', [entry.tag_id, entry.card_id]);

    };
    */
    
    console.log('Data import OK');
    client.end();

})();
