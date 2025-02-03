const mongoose = require('mongoose');
const logger = require('../config/logger');

const connectDB = async (mongoDBConnectionString) => {
  await mongoose.connect(mongoDBConnectionString)
    .then(() => {
      logger.info('Successfully connected to the database');
    })
    .catch((err) => {
      logger.error('Cannot connect to the database', err);
      process.exit();
    });
};

module.exports = connectDB;