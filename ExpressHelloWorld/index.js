"use strict";

var express = require('express');
var app = express();
 
app.get('/', function (req, res) {
  res.send('Hello World');
});
 
app.post('/', function (req, res) {
  res.send('No POST method available');
});

app.get('/helloWorld2', function (req, res) {
  res.send('Hello World2');
});

app.listen(3000);

//Console will print the server info
console.log('Server running at http://127.0.0.1:3000');