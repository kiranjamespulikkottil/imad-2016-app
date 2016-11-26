var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'KiranProfile', 'WebApp.html'));
});

app.get('/KiranProfile/custom.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'KiranProfile', 'custom.css'));
});

app.get('/KiranProfile/kiran.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'KiranProfile', 'kiran.jpg'));
});

app.get('/KiranProfile/user-management.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'KiranProfile', 'user-management.js'));
});

app.get('/KiranProfile/jquery-1.11.1.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'KiranProfile', 'jquery-1.11.1.js'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
