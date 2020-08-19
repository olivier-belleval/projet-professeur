const express = require("express");

const router = express.Router();

const connexionMW = require('../middlewares/connexionMW');


router.use(connexionMW.isUserConnected);

//route1
//route2
//route3...

module.exports = router;