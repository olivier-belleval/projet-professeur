const express = require("express");

const router = express.Router();

const userController = require('../controllers/userController');

const { validateBody } = require('../validation/validator');

const connexionSchema = require('../validation/schemas/connexion');

/**
 * @swagger
 * tags:
 *   - name: Login
 *     description: Login management
 */
/**
 * @swagger
 * /login/login:
 *   get:
 *     description: returns classes names
 *     tags: [Login]
 *     produces:
 *       - application/json
 *     parameters:
 *       - 
 *     responses:
 *       200:
 *         description: login
 *         schema:
 *           $ref: '#/definitions/ClassesUsername'
 */
router.get('/', userController.getClassesUsernames);


 /**
 * @swagger
 * /login/login:
 *   post:
 *     description: Login to the application as class
 *     tags: [Login]
 *     produces:
 *       - application/json
 *     parameters:
 *       - $ref: '#/parameters/username'
 *       - $ref: '#/parameters/password'
 *     responses:
 *       200:
 *         description: login
 *         schema:
 *           type: string
 *           example: Successful login.
 */
router.post('/', validateBody(connexionSchema), userController.classLogin);

 /**
 * @swagger
 * /login/admin:
 *   post:
 *     description: Login to the application as teacher
 *     tags: [Login]
 *     produces:
 *       - application/json
 *     parameters:
 *       - $ref: '#/parameters/username'
 *       - $ref: '#/parameters/password'
 *     responses:
 *       200:
 *         description: login
 *         schema:
 *           type: string
 *           example: Successful login.
 */
router.post('/admin', validateBody(connexionSchema), userController.adminLogin);

/**
 * @swagger
 * /login/logout:
 *   post:
 *     description: Logout to the application
 *     tags: [Login]
 *     responses:
 *       200:
 *         description: login
 *         schema:
 *           type: string
 *           example: Successful logout.
 */
router.get('/logout', userController.logout);

module.exports = router;