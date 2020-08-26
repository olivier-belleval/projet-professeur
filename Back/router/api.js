const express = require("express");

const router = express.Router();

const connexionMW = require('../middlewares/connexionMW');
const teacherMW = require('../middlewares/teacherMW');

const articleController = require('../controllers/articleController');
const kanbanController = require('../controllers/kanbanController');
const adminController = require('../controllers/adminController');

const { validateBody } = require('../validation/validator');

const createArticleSchema = require('../validation/schemas/article/create-article');
const editArticleSchema = require('../validation/schemas/article/edit-article');
const associationArticleClassSchema = require('../validation/schemas/article/association-article-class');

const createKanbanSchema = require('../validation/schemas/kanban/create-kanban');
const editKanbanSchema = require('../validation/schemas/kanban/edit-kanban');
const associationKanbanClassSchema = require('../validation/schemas/kanban/association-kanban-class');

const createList = require('../validation/schemas/list/create-list');
const editList = require('../validation/schemas/list/edit-list');

const createCard = require('../validation/schemas/card/create-card');
const editCard = require('../validation/schemas/card/edit-card');

const createTag = require('../validation/schemas/tag/create-tag');
const editTag = require('../validation/schemas/tag/edit-tag');

const createClass = require('../validation/schemas/admin/create-class');
const editClass = require('../validation/schemas/admin/edit-class');

router.use(connexionMW.isUserConnected);

// routes pour les articles

router.get('/articles', articleController.getAllArticlesWithClass);
router.get('/article/:id(\\d+)', articleController.getOneArticle);
router.post('/article/write', teacherMW.isATeacher, validateBody(createArticleSchema), articleController.createOneArticle);
router.delete('/article/:id(\\d+)/delete', teacherMW.isATeacher, articleController.deleteArticle);
router.post('/article/:id(\\d+)/edit', teacherMW.isATeacher, validateBody(editArticleSchema), articleController.editArticle);
router.post('/article/:id(\\d+)/associate', teacherMW.isATeacher, validateBody(associationArticleClassSchema), articleController.associateClassToArticle);
router.delete('/article/:id(\\d+)/associate/remove', teacherMW.isATeacher,  validateBody(associationArticleClassSchema), articleController.removeAssociationClassToArticle);

// routes pour les kanbans

router.get('/kanbans', kanbanController.getAllKanbans);
router.get('/kanban/:id(\\d+)', kanbanController.getOneKanbansById);
router.post('/kanban/create', teacherMW.isATeacher, validateBody(createKanbanSchema), kanbanController.createKanban);
router.put('/kanban/:id(\\d+)/edit', teacherMW.isATeacher, validateBody(editKanbanSchema), kanbanController.editKanban);
router.delete('/kanban/:id(\\d+)/delete', teacherMW.isATeacher, kanbanController.deleteKanban);
router.post('/kanban/:kanbanId(\\d+)/associate', teacherMW.isATeacher, validateBody(associationKanbanClassSchema), kanbanController.associateClassToKanban);
router.post('/kanban/:id(\\d+)/associate/remove', teacherMW.isATeacher, validateBody(associationKanbanClassSchema), kanbanController.removeAssociationClassToKanban);

// routes pour les listes

router.get('/kanban/:kanbanId(\\d+)/list/:listId(\\d+)', teacherMW.isATeacher, kanbanController.getOneListById);
router.post('/kanban/:id(\\d+)/list/create', teacherMW.isATeacher, validateBody(createList), kanbanController.createList);
router.put('/kanban/:kanbanId(\\d+)/list/:listId(\\d+)/edit', teacherMW.isATeacher, validateBody(editList), kanbanController.editList);
router.delete('/kanban/:kanbanId(\\d+)/list/:listId(\\d+)/delete', teacherMW.isATeacher, kanbanController.deletelist);

// routes pour les cartes

router.get('/list/:listId(\\d+)/card/:cardId(\\d+)', teacherMW.isATeacher, kanbanController.getOneCardById);
router.post('/list/:id(\\d+)/card/create', teacherMW.isATeacher, validateBody(createCard), kanbanController.createCard);
router.put('/list/:listId(\\d+)/card/:cardId(\\d+)/edit',teacherMW.isATeacher, validateBody(editCard), kanbanController.editCard);
router.delete('/list/:listId(\\d+)/card/:cardId(\\d+)/delete', teacherMW.isATeacher, kanbanController.deleteCard);

// routes pour les tags

router.get('/tags', teacherMW.isATeacher, kanbanController.getAllTags);
router.get('/tag/:id(\\d+)', teacherMW.isATeacher, kanbanController.getOneTagById);
router.post('/tag/create', validateBody(createTag), teacherMW.isATeacher, kanbanController.createTag);
router.put('/tag/:id(\\d+)/edit', teacherMW.isATeacher, validateBody(editTag), kanbanController.editTag);
router.delete('/tag/:id(\\d+)/delete', teacherMW.isATeacher, kanbanController.deleteTag);

router.post('/card/:cardId(\\d+)/tag/:tagId(\\d+)/add', teacherMW.isATeacher, kanbanController.createAssociationTagToCard);
router.delete('/card/:cardId(\\d+)/tag/:tagId(\\d+)/remove', teacherMW.isATeacher, kanbanController.deleteAssociationTagToCard);

// routes pour la partie admin

router.get('/admin/classes', teacherMW.isATeacher, adminController.getAllClasses);
router.get('/admin/articles', teacherMW.isATeacher, adminController.getAllArticlesWithoutClasses);
router.get('/admin/class/:id(\\d+)', teacherMW.isATeacher, adminController.getOneClass);
router.post('/admin/class/create', teacherMW.isATeacher, validateBody(createClass), adminController.createClass);
router.put('/admin/class/:id(\\d+)/edit', teacherMW.isATeacher, validateBody(editClass), adminController.editClass);
router.delete('/admin/class/:id(\\d+)/delete', teacherMW.isATeacher, adminController.deleteClass);

module.exports = router;