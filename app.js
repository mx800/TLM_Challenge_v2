const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');


//-------------------------------------
//Directory routes
//-------------------------------------
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const gameRouter = require('./routes/game');
const ninjifyRouter = require('./routes/ninjify');
const konamiRouter = require('./routes/konami');
const secretRouter = require('./routes/secret');
const mongoose = require('mongoose');

const app = express();



//-------------------------------------
//Connection BD
//-------------------------------------
mongoose.connect("mongodb://mx800:90269026aD@ds231229.mlab.com:31229/buzzwords");
const db = mongoose.connection;
//Vérifit les erreurs
db.on('error',console.error.bind(console,'connection error'));
console.log("Connected to database");


//-------------------------------------
// view engine setup
//-------------------------------------
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//-------------------------------------
//Catch route and redirection
//-------------------------------------
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/game', gameRouter);
app.use('/ninjify', ninjifyRouter);
app.use('/konami', konamiRouter);
app.use('/secret', secretRouter);


//-------------------------------------
// catch 404 and forward to error handler
//-------------------------------------
app.use(function(req, res, next) {
  next(createError(404));
});

//-------------------------------------
// error handler
//-------------------------------------
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
