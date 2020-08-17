const express = require("express");

const router = express.Router();

const userController = require('../controllers/userController');

router.post('/api/login', userController.login);
router.get('/api/logout', userController.logout);

module.exports = router;