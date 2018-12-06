var createError   = require('http-errors');
var express       = require('express');
var path          = require('path');
var  mongoose     = require('mongoose')
const cors        = require('cors')
require('dotenv').config()

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var cartsRouter = require('./routes/carts');
var itemsRouter = require('./routes/items');

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors())
app.use('/', indexRouter);
app.use('/users',usersRouter);
// app.use('/carts', cartsRouter);
app.use('/items', itemsRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});
mongoose.connect('mongodb://localhost/e-commerce')

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500)
});

module.exports = app;
