var express = require('express');
var router = express.Router();

var indexRouter = require('./index');
var usersRouter = require('./users');
var repositoriesRouter = require('./repositories');

router.use('/', indexRouter);
router.use('/users', usersRouter);
router.use('/repositories', repositoriesRouter);

module.exports = router;
