var express = require('express');
var requestIp = require('request-ip');

var app = express();

var port = process.env.PORT || 8080;

app.get('/', function (req, res) {
  var clientIp = requestIp.getClientIp(req);
  var clientLanguage = req.acceptsLanguages()[0];
  console.log(clientLanguage);
  var obj = {"ipaddress":clientIp,"language":clientLanguage,"software":null};
  res.json(obj);
});

app.listen(port, function () {
  console.log('Example app listening on port ' + port);
});