const express = require("express");
const app = express();

const cors = require("cors");
const bodyParser = require("body-parser");

require("dotenv").config();

const router = require("./router");
const session = require("express-session");

const swaggerUi = require("swagger-ui-express");
const swaggerJSDoc = require("swagger-jsdoc");

const cookieParser = require("cookie-parser");

const port = process.env.PORT || 3000;

// gestion du request.body
app.use(express.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.use(cookieParser());
// gestion session
app.use(
	session({
		secret: process.env.SECRET,
		resave: true,
		saveUninitialized: true,
		cookie: {
			httpOnly: false,
			sameSite: "lax",
			secure: false,
			rolling: true,
		},
	})
);

app.use(async (req, res, next) => {
	req.session.reload((_) => {
		console.log("session reloaded", req.cookies);
		next();
	});
});
const whiteListOrigin = [
	"http://localhost:8080",
	"http://51.254.203.220",
	"http://omyprof.belleval.com",
	"https://omyprof.belleval.com",
	"https://api.omyprof.belleval.com",
];

// gestion des cors
var corsOptions = {
	origin: whiteListOrigin,
	optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
	preflightContinue: false,
	credentials: true,
};

app.use(cors(corsOptions));

app.options("*", cors());

// swagger management

const options = {
	swaggerDefinition: {
		info: {
			title: "API omyprof",
			version: "1.0.0",
			description: "This is a teacher - student help server.",
			basePath: "/",
		},
		host: `localhost:${port}`, // Host (optional)
		basePath: "/", // Base path (optional)
	},
	// List of files to be processes. You can also set globs './routes/*.js'
	apis: [
		"router/**/*.js",
		"swagger/definitions/parameters.yaml",
		"swagger/definitions/definitions.yaml",
	],
};

const specs = swaggerJSDoc(options);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

app.use(router);

app.listen(port, (_) => {
	console.log(`Running on port ${port}!`);
});
