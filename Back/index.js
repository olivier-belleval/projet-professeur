const express = require('express');
const app = express();

const cors = require('cors');
const bodyParser = require('body-parser');

require('dotenv').config();

const router = require('./router');
const session = require('express-session');

const fileUpload = require('express-fileupload');

app.use(fileUpload({
    createParentPath: true
}));

// gestion du request.body
app.use(express.urlencoded({extended: true}));

app.use(bodyParser.json());

// gestion session
app.use(session({

    secret: process.env.SECRET,
    resave: true,
    saveUninitialized: true,

}));

const whiteListOrigin = ['http://localhost:8080',]

// gestion des cors
var corsOptions = {
    origin: whiteListOrigin,
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
    preflightContinue: false,
    credentials: true
  }

app.use(cors(corsOptions));

app.options('*', cors());

app.use(router);


const port = process.env.PORT || 3000;

app.listen(port, _ => {
    console.log(`Running on port ${port}!`);
});