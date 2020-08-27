const express = require("express");
const router = express.Router();

const teacherMW = require('../../middlewares/teacherMW');

// Import des schémas

const { validateBody } = require('../../validation/validator');
const { createArticleSchema, editArticleSchema , associationArticleClassSchema } = require('../../validation/schemas/article');

const articleController = require('../../controllers/articleController');

// routes article

router.get('/all', articleController.getAllArticlesWithClass);
router.get('/:id(\\d+)', articleController.getOneArticle);
router.post('/write', teacherMW.isATeacher, validateBody(createArticleSchema), articleController.createOneArticle);
router.delete('/:id(\\d+)/delete', teacherMW.isATeacher, articleController.deleteArticle);
router.put('/:id(\\d+)/edit', teacherMW.isATeacher, validateBody(editArticleSchema), articleController.editArticle);
router.post('/:id(\\d+)/associate', teacherMW.isATeacher, validateBody(associationArticleClassSchema), articleController.associateClassToArticle);
router.delete('/:id(\\d+)/associate/remove', teacherMW.isATeacher,  validateBody(associationArticleClassSchema), articleController.removeAssociationClassToArticle);




module.exports = router;