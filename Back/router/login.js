const express = require("express");

const router = express.Router();

const userController = require('../controllers/userController');

router.get('/', userController.getClassesUsernames);
router.post('/', userController.classLogin);
router.post('/admin', userController.adminLogin);
router.get('/logout', userController.logout);

module.exports = router;