const express = require("express");

const router = express.Router();

const userController = require('../controllers/userController');
const kanbanController = require('../controllers/kanbanController');

router.post('/api/login', userController.login);
router.get('/api/logout', userController.logout);

router.get('/api/kanbans', kanbanController.getAllKanbans);
router.get('/api/kanbans/class/:classname', kanbanController.getAllKanbansByClass);
router.get('/api/kanban/:id', kanbanController.getOneKanbansById);
router.post('/api/kanban/create', kanbanController.createKanban);
router.delete('/api/kanban/:id/delete', kanbanController.deleteKanban);

router.post('/api/kanban/:id/list/create', kanbanController.createList);
router.delete('/api/kanban/:kanbanId/list/:listId/delete', kanbanController.deletelist);

router.post('/api/list/:id/card/create', kanbanController.createCard);
router.delete('/api/list/:listId/card/:cardId/delete', kanbanController.deleteCard);






module.exports = router;