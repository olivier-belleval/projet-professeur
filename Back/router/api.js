const express = require("express");

const router = express.Router();

const connexionMW = require('../middlewares/connexionMW');


router.use(connexionMW.isUserConnected);

//route1
//route2
//route3...
router.get('/articles', articleController.getAllArticlesWithClass);
router.get('/article/:id(\\d+)', articleController.getOneArticle);
router.post('/article/write', articleController.createOneArticle);
router.get('/article/:id(\\d+)/delete', articleController.deleteArticle);
router.post('/article/associate', articleController.associateClassToArticle);

module.exports = router;