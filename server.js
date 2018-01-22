var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var http = require('http');
var server = http.Server(app);
var mongoose = require('mongoose');
var port = process.env.PORT || 8800;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var db = require('./config/db');
mongoose.set('debug',true);
mongoose.connect(db.url);

app.use(express.static(__dirname + '/public'));

require("./app/routes")(app);
server.listen(port);

server = http.createServer(app);
console.log('Magic happens on port ' + port);

// expose app
exports = module.exports = app;
