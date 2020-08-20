const express = require("express");

const router = express.Router();

const connexionMW = require('../middlewares/connexionMW');
const teacherMW = require('../middlewares/teacherMW');

const articleController = require('../controllers/articleController');
const kanbanController = require('../controllers/kanbanController');

router.use(connexionMW.isUserConnected);

// routes pour les articles
router.get('/articles', articleController.getAllArticlesWithClass);
router.get('/article/:id(\\d+)', articleController.getOneArticle);
router.post('/article/write', teacherMW.isATeacher, articleController.createOneArticle);
router.delete('/article/:id(\\d+)/delete', teacherMW.isATeacher, articleController.deleteArticle);
router.post('/article/associate', teacherMW.isATeacher, articleController.associateClassToArticle);

// routes pour les kanbans
router.get('/kanbans', kanbanController.getAllKanbans);
router.get('/kanban/:id(\\d+)', kanbanController.getOneKanbansById);
router.post('/kanban/create', teacherMW.isATeacher, kanbanController.createKanban);
router.put('/kanban/:id(\\d+)/edit', teacherMW.isATeacher, kanbanController.editKanban);
router.delete('/kanban/:id(\\d+)/delete', teacherMW.isATeacher, kanbanController.deleteKanban);
router.post('/kanban/:articleId(\\d+)/associate', /*teacherMW.isATeacher,*/ kanbanController.associateClassToKanban);
router.post('/kanban/:id(\\d+)/associate/remove', teacherMW.isATeacher, kanbanController.todo);

router.post('/kanban/:id(\\d+)/list/create', teacherMW.isATeacher, kanbanController.createList);
router.put('/kanban/:kanbanId(\\d+)/list/:listId(\\d+)/edit', kanbanController.editList);
router.delete('/kanban/:kanbanId(\\d+)/list/:listId(\\d+)/delete', teacherMW.isATeacher, kanbanController.deletelist);

router.post('/list/:id(\\d+)/card/create', teacherMW.isATeacher, kanbanController.createCard);
router.put('/list/:listId(\\d+)/card/:cardId(\\d+)/edit',teacherMW.isATeacher, kanbanController.editCard);
router.delete('/list/:listId(\\d+)/card/:cardId(\\d+)/delete', teacherMW.isATeacher, kanbanController.deleteCard);

router.get('/tags', teacherMW.isATeacher, kanbanController.getAllTags)
router.post('/tag/create', teacherMW.isATeacher, kanbanController.createTag);
router.put('/tag/:id(\\d+)/edit', kanbanController.editTag)
router.delete('/tag/:id(\\d+)/delete', teacherMW.isATeacher, kanbanController.deleteTag);

router.post('/card/:cardId(\\d+)/tag/:tagId(\\d+)/add', teacherMW.isATeacher, kanbanController.createAssociationTagToCard);
router.delete('/card/:cardId(\\d+)/tag/:tagId(\\d+)/remove', teacherMW.isATeacher, kanbanController.deleteAssociationTagToCard);



module.exports = router;