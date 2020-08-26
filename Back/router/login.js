const express = require("express");

const router = express.Router();

const userController = require('../controllers/userController');

const { validateBody } = require('../validation/validator');

const connexionSchema = require('../validation/schemas/connexion');

router.get('/', userController.getClassesUsernames);
router.post('/', validateBody(connexionSchema), userController.classLogin);
router.post('/admin', validateBody(connexionSchema), userController.adminLogin);
router.get('/logout', userController.logout);

module.exports = router;