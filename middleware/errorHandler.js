const errorHandler = (err, req, res) => {
  console.error(err.stack);
  res.status(err.status || 500).send({
    message: err.message || "Internal Server Error",
  });
};

module.exports = errorHandler;