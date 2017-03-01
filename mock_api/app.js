var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cors = require('cors');

var smboApi = require('./routes');

var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../../build')));

app.use(cors());
app.use('/smbo-api', smboApi);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Resource Not Found!');
    err.status = 404;
    next(err);
});

var uuid = function() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
        var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
};

// error handler
app.use(function (err, req, res, next) {
    var status = err.status || 500;
    res.status(status);
    res.json({
        code: status,
        message: err.message,
        exceptionId: uuid()
    });
});

module.exports = app;
