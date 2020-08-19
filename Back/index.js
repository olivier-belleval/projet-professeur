const express = require('express');
const app = express();

const cors = require('cors')

require('dotenv').config();

const router = require('./router');
const session = require('express-session');

// gestion du request.body
app.use(express.urlencoded({extended: true}));

// gestion session
app.use(session({

    secret: process.env.SECRET,
    resave: true,
    saveUninitialized: true,

}));

// gestion CORS
app.options('*',cors);

app.use(router);


const port = process.env.PORT || 3000;

app.listen(port, _ => {
    console.log(`Running on port ${port}!`);
});