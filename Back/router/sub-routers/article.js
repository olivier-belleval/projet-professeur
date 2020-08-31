const express = require("express");
const router = express.Router();

const teacherMW = require('../../middlewares/teacherMW');

// Import des schémas

const { validateBody } = require('../../validation/validator');
const { createArticleSchema, editArticleSchema , associationArticleClassSchema } = require('../../validation/schemas/article');

const articleController = require('../../controllers/articleController');

// routes article
/**
 * @swagger
 * tags:
 *   - name: Article
 *     description: articles management
 */
/**
 * @swagger
 * /api/article/all:
 *   get:
 *     description: Returns all articles object how are linked with classes
 *     tags: [Article]
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Array of all articles
 *         schema:
 *          type: object
 *          properties:
 *              data:
 *                  type: array
 *                  items:
 *                      $ref: '#/definitions/ArticleWithClasses'
 */
router.get('/all', articleController.getAllArticlesWithClass);

/**
 * @swagger
 * /api/article/{id}:
 *   get:
 *     description: Get a article by id
 *     tags: [Article]
 *     produces:
 *       - application/json
 *     parameters:
 *       - $ref: '#/parameters/articleId'
 *     responses:
 *       200:
 *         description: return the object article
 *         schema:
 *          type: object
 *          properties:
 *              data:
 *                  $ref: '#/definitions/ArticleView'
 */
router.get('/:id(\\d+)', articleController.getOneArticle);

/**
 * @swagger
 * /api/article/create:
 *   post:
 *     description: Create a new article
 *     tags: [Article]
 *     produces:
 *       - application/json
 *     parameters:
 *       - $ref: '#/parameters/title'
 *       - $ref: '#/parameters/content'
 *       - $ref: '#/parameters/teacherId'
 *     responses:
 *       200:
 *         description: created article
 *         schema:
 *          type: object
 *          properties:
 *              data:
 *                  $ref: '#/definitions/Article'
 */
router.post('/write', teacherMW.isATeacher, validateBody(createArticleSchema), articleController.createOneArticle);

/**
 * @swagger
 * /api/article/edit:
 *   put:
 *     description: edit an article
 *     tags: [Article]
 *     produces:
 *       - application/json
 *     parameters:
 *       - $ref: '#/parameters/title'
 *       - $ref: '#/parameters/content'
 *       - $ref: '#/parameters/teacherId'
 *     responses:
 *       200:
 *         description: edited article
 *         schema:
 *          type: object
 *          properties:
 *              message:
 *                  type:  string
 *              data:
 *                  $ref: '#/definitions/Article'
 */
router.put('/:id(\\d+)/edit', teacherMW.isATeacher, validateBody(editArticleSchema), articleController.editArticle);

/**
 * @swagger
 * /api/article/{id}/delete':
 *   delete:
 *     description: delete a article
 *     operationId: deleteArticle
 *     tags: [Article]
 *     produces:
 *       - application/json
 *     parameters:
 *       - $ref: '#/parameters/articleId'
 *     responses:
 *       200:
 *         description: login
 *         schema:
 *          type: object
 *          properties:
 *              message:
 *                  type:  string
 *              data:
 *                  $ref: '#/definitions/Article'
 */
router.delete('/:id(\\d+)/delete', teacherMW.isATeacher, articleController.deleteArticle);

/**
 * @swagger
 * /api/article/{id}/associate:
 *   post:
 *     description: Associate a class to an article
 *     tags: [Article]
 *     produces:
 *       - application/json
 *     parameters:
 *       - $ref: '#/parameters/articleId'
 *       - in: body
 *         name: classId
 *         description: id of the conserned class
 *         schema:
 *              type: object
 *              properties:
 *                  classId:
 *                      type:  integer
 *                      example: 12
 *         required: true
 *         example: 1
 *     responses:
 *       200:
 *         description: created article
 *         schema:
 *          type: object
 *          properties:
 *              message:
 *                  type:  string
 *                  example: Association has been successfully added.
 *              data:
 *                  $ref: '#/definitions/m2m_class_to_article'
 */
router.post('/:id(\\d+)/associate', teacherMW.isATeacher, validateBody(associationArticleClassSchema), articleController.associateClassToArticle);

/**
 * @swagger
 * /api/article/{id}/associate/remove:
 *   delete:
 *     description: Associate a class to an article
 *     tags: [Article]
 *     produces:
 *       - application/json
 *     parameters:
 *       - $ref: '#/parameters/articleId'
 *       - in: body
 *         name: classId
 *         description: id of the conserned class
 *         schema:
 *              type: object
 *              properties:
 *                  classId:
 *                      type:  integer
 *                      example: 12
 *         required: true
 *         example: 1
 *     responses:
 *       200:
 *         description: created article
 *         schema:
 *          type: object
 *          properties:
 *              message:
 *                  type:  string
 *                  example: Association has been successfully removed.
 *              data:
 *                  $ref: '#/definitions/m2m_class_to_article'
 */
router.delete('/:id(\\d+)/associate/remove', teacherMW.isATeacher,  validateBody(associationArticleClassSchema), articleController.removeAssociationClassToArticle);


module.exports = router;