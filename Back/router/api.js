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
router.post('/article/:id(\\d+)/edit', teacherMW.isATeacher, articleController.editArticle);
router.post('/article/:id(\\d+)/associate', teacherMW.isATeacher, articleController.associateClassToArticle);
router.post('/article/:id(\\d+)/associate/remove', teacherMW.isATeacher, articleController.removeAssociationClassToArticle);

// routes pour les kanbans
router.get('/kanbans', kanbanController.getAllKanbans);
router.get('/kanban/:id', kanbanController.getOneKanbansById);
router.post('/kanban/create', teacherMW.isATeacher, kanbanController.createKanban);
router.delete('/kanban/:id/delete', teacherMW.isATeacher, kanbanController.deleteKanban);

router.post('/kanban/:id/list/create', teacherMW.isATeacher, kanbanController.createList);
router.delete('/kanban/:kanbanId/list/:listId/delete', teacherMW.isATeacher, kanbanController.deletelist);

router.post('/list/:id/card/create', teacherMW.isATeacher, kanbanController.createCard);
router.delete('/list/:listId/card/:cardId/delete', teacherMW.isATeacher, kanbanController.deleteCard);

module.exports = router;