const status = require('http-status');
const ApiError = require('../utils/ApiError');

const errorLog = (err, req, res, next) => {
  console.error('\x1b[31m', err);
  next(err);
};

const errorConverter = (err, req, res, next) => {
  let error = err;
  if (!(error instanceof ApiError)) {
    const statusCode = error.statusCode || status.INTERNAL_SERVER_ERROR;
    const message = error.message || 'Error - Contact system Administrator.';
    error = new ApiError(statusCode, message);
  }
  next(error);
};

const errorResponse = (err, req, res) => {
  const { statusCode, message } = err;

  res.header('Content-Type', 'application/json');
  res.status(statusCode).json({
    statusCode,
    message,
    author: 'https://github.com/GabrielMarianosf',
  });
};

module.exports = { errorLog, errorConverter, errorResponse };
