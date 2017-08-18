var express = require('express');
var request = require('request');
var apiServerHost = process.env.apiServerHost;

var app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use('/', function(req, res) {
  var url = apiServerHost + req.url;
https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=your_key&per_page=10&format=json&nojsoncallback=1
  req.pipe(request(url)).pipe(res);
});

app.listen(process.env.PORT || 3000);
