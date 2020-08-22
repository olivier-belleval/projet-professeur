const express = require('express');
const app = express();

const cors = require('cors');
const bodyParser = require('body-parser');

require('dotenv').config();

const router = require('./router');
const session = require('express-session');

app.use((request, response, next) => {
    response.header('Access-Control-Allow-Origin', 'http://localhost:8080');
    response.header('Access-Control-Allow-Credentials', true);
    response.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    response.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

// gestion du request.body
app.use(express.urlencoded({extended: true}));

app.use(bodyParser.json());

// gestion session
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