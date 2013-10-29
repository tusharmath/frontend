var express = require('express')
  , wwstay = require('./routes/wwstay')
  , http = require('http')
  , path = require('path');

var app = express();
app.version = require('./package.json').version;
var versionator = require('versionator').create('v' + app.version);

app.configure(function() {
	app.set('port', process.env.PORT || 3000);
	app.set('views', __dirname + '/views');
	app.set('view engine', 'jade');
	app.use(express.favicon());
	app.use(express.logger('dev'));
	app.use(express.bodyParser());
	app.use(express.methodOverride());
	app.use(app.router);
	app.use(versionator.middleware);
	app.locals({
		versionPath: versionator.versionPath
	});
	app.use('/fe/static', express.static(path.join(__dirname, 'static')));
});

app.configure('development', function() {
	app.use(express.errorHandler());
});

app.get('/', wwstay.home);
app.get('/deals', wwstay.deals);
app.get('/terms', wwstay.terms);
app.get('/privacy', wwstay.privacy);
app.get('/about', wwstay.about);
app.get('/careers', wwstay.careers);
app.get('/leisure', wwstay.leisure);
app.get('/business', wwstay.business);
app.get('/contact', wwstay.contact);
app.get('/privacy', wwstay.privacy);
app.get('/terms', wwstay.terms);
app.get('/credits', wwstay.credits);
app.post('/request', wwstay.request);

http.createServer(app).listen(app.get('port'), function() {
	console.log("Express server listening on port " + app.get('port'));
});