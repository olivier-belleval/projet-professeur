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

router.get('/class/all', adminController.getAllClasses);
router.get('/article/all', adminController.getAllArticlesWithoutClasses);
router.get('/class/:id(\\d+)', adminController.getOneClass);
router.post('/class/create', validateBody(createClassSchema), adminController.createClass);
router.put('/class/:id(\\d+)/edit', validateBody(editClassSchema), adminController.editClass);
router.delete('/class/:id(\\d+)/delete', adminController.deleteClass);


module.exports = router;