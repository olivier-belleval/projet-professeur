const express = require("express");
const router = express.Router();

const connexionMW = require('../middlewares/connexionMW');

// import des sub-routers

const articleRouter = require('./sub-routers/article');
const kanbanRouter = require('./sub-routers/kanban');
const adminRouter = require('./sub-routers/admin');


// middleware pour vérifier que l'utilisateur est connecté

router.use(connexionMW.isUserConnected);


router.use('/article', articleRouter)
    .use('/kanban', kanbanRouter)
    .use('/admin', adminRouter)
    .get('/download/:filename',filesController.downloadFile);

module.exports = router;