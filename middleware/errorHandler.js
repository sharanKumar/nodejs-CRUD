const logger = require("../config/logger");

const errorHandler = (err, req, res) => {
  logger.error(err.stack);
  res.status(err.status || 500).send({
    message: err.message || "Internal Server Error",
  });
};

module.exports = errorHandler;