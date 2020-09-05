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

const swaggerUi = require('swagger-ui-express');
const swaggerJSDoc = require('swagger-jsdoc');

const port = process.env.PORT || 3000;
//const swaggerDefinition = require('./swagger/SwaggerDefinition.json');

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

// swagger management

const options = {
    swaggerDefinition: {

        info: {
            title: 'API omyprof',
            version: '1.0.0',
            description: 'This is a teacher - student help server.',
            basePath: '/',
        },
        host: `localhost:${port}`, // Host (optional)
        basePath: '/', // Base path (optional)
    },
    // List of files to be processes. You can also set globs './routes/*.js'
    apis: ['router/**/*.js','swagger/definitions/parameters.yaml','swagger/definitions/definitions.yaml'],
  };
  
const specs = swaggerJSDoc(options);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

//app.use('/api-doc', swaggerUi.serve, swaggerUi.setup(swaggerDefinition));

app.use(router);


app.listen(port, _ => {
    console.log(`Running on port ${port}!`);
});