const express = require("express");

const router = express.Router();

const userController = require('../controllers/userController');
const kanbanController = require('../controllers/kanbanController');

router.post('/api/login', userController.login);
router.get('/api/logout', userController.logout);

router.post('/api/kanban/create', kanbanController.createKanban)

module.exports = router;