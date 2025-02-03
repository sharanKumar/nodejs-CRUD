// add .env file 
require('dotenv').config();
const express = require('express')
const cors = require('cors')
const helmet = require('helmet');
const compression = require('compression');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const rateLimit = require('express-rate-limit');

const app = express();

const db = require('./db/dbConnect.js')
const tutorialRouter = require('./routes/tutorial.routes.js')
const usersRouter = require('./routes/users.routes.js')
const { swaggerUi, specs } = require("./config/swaggerConfig.js");
const errorHandler = require('./middleware/errorHandler.js');
const logger = require('./config/logger.js');

// connect to DB 
db(process.env.MONGODB_CONNECTIONSTRING);

// Rate limiting
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
  });
  app.use(limiter);

// Security middleware
app.use(helmet());
app.use(compression());
app.use(mongoSanitize());
app.use(xss());
app.use(cors());

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

//swagger doc
app.use("/api-doc", swaggerUi.serve, swaggerUi.setup(specs));

// Use the error handling middleware
app.use(errorHandler);

//add all routes to express
app.use('/api/tutorials',tutorialRouter)
app.use('/api/users',usersRouter)

//start the server
const PORT = process.env.PORT || 8082;
app.listen(PORT, () => {
    logger.info(`Server is running on port ${PORT}.`);
    logger.info(`Swagger docs available at http://localhost:${PORT}/api-docs`);
  });

  module.exports = app; // Export the app for testing