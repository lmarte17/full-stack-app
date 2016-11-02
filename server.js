var express = require('express');
var logger = require('morgan');
var log = logger('dev');
var bodyParser = require('body-parser');
var PORT = process.env.PORT || 3000;
var mongoose = require('mongoose');
var Todo = require('./todo.js');
var path = require('path');
var Routes = require('./routes.js');
var app = express();
Routes(app);

app.use(log
  , bodyParser.json()
  , bodyParser.urlencoded({extended: true })
);

app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, (err) => {
  if(err) {
    console.log("Server Error ", err);
    process.exit(1);
  }
  console.log("Server is running on port " + PORT);
});

mongoose.connect('mongodb://localhost/todo', (err) => {
  console.log(err ? 'could not connect': 'connected');
});
