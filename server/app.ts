/// <reference path = "./_reference.ts"/>

import express = require('express');
import path = require('path');
var favicon = require('serve-favicon');
import logger = require('morgan');
import cookieParser = require('cookie-parser');
import bodyParser = require('body-parser');
// add mongoose
import mongoose = require('mongoose');

// User
import userModel = require('./models/user');

import User = userModel.User;

import session = require('express-session');
// flash messages
import flash = require('connect-flash');
import passport = require('passport');
import passportLocal = require('passport-local');
import LocalStrategy = passportLocal.Strategy;

// import objects namespace
import * as objects from './objects/customerror';
import CustomError = objects.CustomError;
var myerror = new CustomError();

var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, '../public/Assets/images', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
// Initialize Session
app.use(session({
    secret: 'someSecret',
    saveUninitialized: false,
    resave: true
}));

app.use(passport.initialize());
app.use(passport.session());

// Initialize Flash Messages
app.use(flash());

app.use(express.static(path.join(__dirname, '../public')));

// passport config
passport.use(User.createStrategy());
//passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Route Definitions
app.use('/', routes);
app.use('/users', users);

// connect to mongodb with mongoose
var DB = require('./config/db');
mongoose.connect(DB.url);

// check connection
var db: mongoose.Connection = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection Error: '));
db.once('open', function(callback) {
    console.log('Connected to mongoLab');
});


// catch 404 and forward to error handler
app.use((req: express.Request, res: express.Response, next: any) => {
    var error = new CustomError('Not Found');
    error.status = 404;
    next(error);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use((error: CustomError, req: express.Request, res: express.Response, next: any) => {
        res.status(error.status || 500);
        res.render('error', {
            message: error.message,
            error: error
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use((error: CustomError, req: express.Request, res: express.Response, next: any) => {
    res.status(error.status || 500);
    res.render('error', {
        message: error.message,
        error: {}
    });
});


module.exports = app;
