const express = require("express");
const router = express.Router();

const teacherMW = require('../../middlewares/teacherMW');

// Import des schémas
const { validateBody } = require('../../validation/validator');
const { createClassSchema, editClassSchema } = require('../../validation/schemas/class');


const adminController = require('../../controllers/adminController');

// vérification connexion admin

router.use(teacherMW.isATeacher);

// routes admin

/**
 * @swagger
 * tags:
 *   - name: Admin
 *     description: Administration management
 */
/**
 * @swagger
 * /api/admin/class/all:
 *   get:
 *     description: Returns all classes object
 *     tags: [Admin]
 *     produces:
 *       - application/json
 *     parameters:
 *       - 
 *     responses:
 *       200:
 *         description: Array of all classes
 *         schema:
 *          type: object
 *          properties:
 *              data:
 *                  type: array
 *                  items:
 *                      $ref: '#/definitions/Class'
 */
router.get('/class/all', adminController.getAllClasses);

/**
 * @swagger
 * /api/admin/article/all:
 *   get:
 *     description: Returns all articles object
 *     tags: [Admin]
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
 *                      $ref: '#/definitions/Article'
 */
router.get('/article/all', adminController.getAllArticlesWithoutClasses);

/**
 * @swagger
 * /api/admin/class/{id}:
 *   get:
 *     description: Get a class by id
 *     tags: [Admin]
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: return the object class
 *         schema:
 *          type: object
 *          properties:
 *              data:
 *                  $ref: '#/definitions/Article'
 */
router.get('/class/:id(\\d+)', adminController.getOneClass);

/**
 * @swagger
 * /api/admin/class/create:
 *   post:
 *     description: Create a new Class
 *     tags: [Admin]
 *     produces:
 *       - application/json
 *     parameters:
 *       - $ref: '#/parameters/username'
 *       - $ref: '#/parameters/password'
 *       - $ref: '#/parameters/description'
 *       - $ref: '#/parameters/teacherId'
 *     responses:
 *       200:
 *         description: login
 *         schema:
 *          type: object
 *          properties:
 *              message:
 *                  type:  string
 *              data:
 *                  $ref: '#/definitions/Class'
 */
router.post('/class/create', validateBody(createClassSchema), adminController.createClass);

/**
 * @swagger
 * /api/admin/class/{id}/edit':
 *   put:
 *     description: Edit a Class
 *     tags: [Admin]
 *     produces:
 *       - application/json
 *     parameters:
 *       - $ref: '#/parameters/username'
 *       - $ref: '#/parameters/password'
 *       - $ref: '#/parameters/description'
 *       - $ref: '#/parameters/classId'
 *     responses:
 *       200:
 *         description: login
 *         schema:
 *          type: object
 *          properties:
 *              message:
 *                  type:  string
 *              data:
 *                  $ref: '#/definitions/Class'
 */
router.put('/class/:id(\\d+)/edit', validateBody(editClassSchema), adminController.editClass);

/**
 * @swagger
 * /api/admin/class/{id}/delete':
 *   delete:
 *     description: delete a Class
 *     tags: [Admin]
 *     produces:
 *       - application/json
 *     parameters:
 *       - $ref: '#/parameters/classId'
 *     responses:
 *       200:
 *         description: login
 *         schema:
 *          type: object
 *          properties:
 *              message:
 *                  type:  string
 *              data:
 *                  $ref: '#/definitions/Class'
 */
router.delete('/class/:id(\\d+)/delete', adminController.deleteClass);


module.exports = router;