// import files and packages up here
var express = require('express');
var app = express();
var logger = require('morgan');
var topSpotsData = require('../server/data.json');

// create your express server below

// add your routes and middleware below
app.use(express.static('public'));

app.get('/data', (req, res) => res.send(topSpotsData));

app.use(logger('dev'));

// finally export the express application
module.exports = app;