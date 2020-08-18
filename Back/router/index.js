const express = require("express");

const router = express.Router();

const userController = require('../controllers/userController');
const articleController = require('../controllers/articleController');

// connexion 
router.post('/api/login', userController.classLogin);
router.post('/api/admin/login', userController.adminLogin);


// routes liées aux articles
router.get('/api/articles', articleController.getAllArticlesWithClass);
router.get('/api/article/:id(\\d+)', articleController.getOneArticle);
router.post('/api/article/write', articleController.createOneArticle);
router.get('/api/article/:id(\\d+)/delete', articleController.deleteArticle);
router.post('/api/article/associate', articleController.associateClassToArticle);

module.exports = router;