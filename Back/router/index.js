const express = require("express");

const router = express.Router();

const userController = require('../controllers/userController');
const articleController = require('../controllers/articleController');

// connexion 
router.post('/api/login', userController.classLogin);
router.post('/api/admin/login', userController.adminLogin);

// routes liées aux articles
router.get('/api/articles', articleController.getAllArticles);

module.exports = router;