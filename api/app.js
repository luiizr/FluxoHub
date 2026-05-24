var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var swaggerUi = require('swagger-ui-express');
var swaggerDocument = require('./swagger/swagger-output.json');
var routes = require('./routes/routes');

var app = express();
var swaggerOptions = {
  customSiteTitle: 'FluxoHub API Docs',
};

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(swaggerUi.serve);
app.get('/', swaggerUi.setup(swaggerDocument, swaggerOptions));
app.use('/', routes);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`FluxoHub API running on port ${port}`);
});

module.exports = app;
