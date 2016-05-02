const http = require('http');
var express = require('express');
var app = express();

const hostname = '127.0.0.1';
const port = 3000;

app.use('/', express.static(__dirname + '/src'));

app.get('/', function(req, res) {
  res.sendFile(__dirname+ '\\src' + req.url);
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});