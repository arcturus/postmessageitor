var express = require('express');
var fs = require('fs');

var app = express();

app.get('/', function(req, res) {
  var html = fs.readFileSync('postmessage.html').toString();
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end(html);
});

app.listen(3000);
