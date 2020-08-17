const express = require('express');
const app = express();

require('dotenv').config();

const router = require('./router');
const session = require('express-session');

app.use(express.urlencoded({extended: true}));

app.use(session({

    secret: process.env.SECRET,
    resave: true,
    saveUninitialized: true,

}));

app.use(router);


const port = process.env.PORT || 3000;

app.listen(port, _ => {
    console.log(`Running on port ${port}!`);
});