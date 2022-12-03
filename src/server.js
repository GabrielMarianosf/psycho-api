const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');

const app = express();

const cors = require('cors');
const bodyParser = require('express').json;
const routes = require('./routes/index');
const { errorLog, errorConverter, errorResponse } = require('./middlewares/error');

// morgan register requests in console
app.use(morgan('dev'));

// cors
app.use(cors({ origin: '*' }));

// Accept post form data
// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser());

app.get('/', (req, res) => {
  res.type('application/json').status(200).json({
    status: '200',
    message: 'Psycho API ;)',
    author: 'https://github.com/GabrielMarianosf',
  });
});

// Registering Routes
app.use(routes);

// middleware error
app.use(errorLog);
app.use(errorConverter);
app.use(errorResponse);

// Helmet helps you secure your Express apps by setting various HTTP headers.
// It's not a silver bullet, but it can help!
app.use(helmet());

module.exports = app;
