var express = require('express');
var requestIp = require('request-ip');

var app = express();

var port = process.env.PORT || 8080;

app.get('/', function (req, res) {
  var clientIp = requestIp.getClientIp(req);
  var clientLanguage = req.acceptsLanguages()[0];  
  var clientOs = req.headers['user-agent'].split(') ')[0].split(' (')[1]
  
  var obj = {"ipaddress":clientIp,"language":clientLanguage,"software":clientOs};
  res.json(obj);
});

app.listen(port, function () {
  console.log('Example app listening on port ' + port);
});