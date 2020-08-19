const express = require("express");

const router = express.Router();

const connexionMW = require('../middlewares/connexionMW');


router.use(connexionMW.isUserConnected);

// routes pour les articles
router.get('/articles', articleController.getAllArticlesWithClass);
router.get('/article/:id(\\d+)', articleController.getOneArticle);
router.post('/article/write', articleController.createOneArticle);
router.get('/article/:id(\\d+)/delete', articleController.deleteArticle);
router.post('/article/associate', articleController.associateClassToArticle);

// routes pour les kanbans
router.get('/kanbans', kanbanController.getAllKanbans);
router.get('/kanban/:id', kanbanController.getOneKanbansById);
router.post('/kanban/create', kanbanController.createKanban);
router.delete('/kanban/:id/delete', kanbanController.deleteKanban);

router.post('/kanban/:id/list/create', kanbanController.createList);
router.delete('/kanban/:kanbanId/list/:listId/delete', kanbanController.deletelist);

router.post('/list/:id/card/create', kanbanController.createCard);
router.delete('/list/:listId/card/:cardId/delete', kanbanController.deleteCard);

module.exports = router;