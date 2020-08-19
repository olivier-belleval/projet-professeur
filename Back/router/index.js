const express = require("express");

const router = express.Router();

const connexionMW = require('../middlewares/connexionMW');
const userController = require('../controllers/userController');


router.post('/api/login', userController.classLogin);
router.post('/api/admin/login', userController.adminLogin);

module.exports = router;


