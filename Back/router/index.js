const express = require("express");
const router = express.Router();

const loginRouter = require('./login');
const apiRouter = require('./api');

const errorMW = require('../middlewares/error')



router.use('/login', loginRouter)
    .use('/api', apiRouter)
    .use(errorMW.error404);


module.exports = router;


