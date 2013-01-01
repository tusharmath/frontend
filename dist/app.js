/*! app - v0.1.0 - 2012-12-25
* http://wwstay.com
* Copyright (c) 2012 WWstay geek squad <dev@wwstay.com>; Licensed MIT */

var express = require('express')
  , wwstay = require('./routes/wwstay')
  , http = require('http')
  , path = require('path');

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use('/fe/static', express.static(path.join(__dirname, 'static')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.get('/', wwstay.home);
app.get('/deals', wwstay.deals)
app.get('/terms', wwstay.terms)
app.get('/privacy', wwstay.privacy)
app.get('/team', wwstay.team)
app.get('/leisure', wwstay.leisure)
app.get('/business', wwstay.business)

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});