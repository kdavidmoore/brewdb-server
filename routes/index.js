var express = require('express');
var router = express.Router();
var http = require('http');
var API_KEY = require('./secrets').getSecrets().BREW_KEY;

router.get('/', function(req, res, next) {
	res.json({ warning: 'No location parameters set.' });
});

router.get('/:location', function(req, res, next) {

	var options = {
		host: 'api.brewerydb.com',
		path: '/v2/locations?locality=' + encodeURI(req.params.location) + '&key=' + API_KEY 
	};

	var callback = function(response) {
		var str = '';
		response.on('data', function(chunk) {
			str += chunk;
		});
		response.on('end', function() {
			res.json(JSON.parse(str));
		});
	};

	http.request(options, callback).end();
});

module.exports = router;
