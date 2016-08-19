var express = require('express');
var router = express.Router();
var http = require('http');
var API_KEY = secrets.getSecrets().BREW_KEY;


router.get('/', function(req, res, next) {
	res.render('index', { title: 'Express' });
});


router.get('/:location', function(req, res, next) {


	var locationToSend = req.params.location;
	if (req.params.location === undefined) {
		locationToSend = '';
	}

	var options = {
		host: 'api.brewerydb.com',
		path:'/v2/locations?locality=atlanta&key=' + API_KEY 
	};

	var callback = function(response) {
		var str = '';
		response.on('data', function(chunk) {
			str += chunk;
		});
		response.on('end', function() {
			console.log(str);
		});
	}

	http.request(options, callback).end();

});

module.exports = router;
