// add .env file 
require('dotenv').config();
const express = require('express')
const cors = require('cors')

const app = express();

const db = require('./db/dbConnect.js')
const tutorialRouter = require('./routes/tutorial.routes.js')
const usersRouter = require('./routes/users.routes.js')
const { swaggerUi, specs } = require("./swaggerConfig");

// connect to DB 
db(process.env.MONGODB_CONNECTIONSTRING);

let corsOptions = {
    origin : "https://localhost:8081/"
}

app.use(cors(corsOptions))

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

//swagger doc
app.use("/api-doc", swaggerUi.serve, swaggerUi.setup(specs));

//add all routes to express
app.use('/',tutorialRouter)
app.use('/',usersRouter)

//start the server
const PORT = process.env.PORT || 8082;
app.listen(PORT, () =>{
    console.log(`Server is running in PORT ${PORT}.`);
    console.log(`Swagger docs available at http://localhost:${PORT}/api-doc`);
})