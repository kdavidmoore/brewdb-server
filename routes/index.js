var express = require('express');
var router = express.Router();
var http = require('http');
var API_KEY = require('./secrets').getSecrets().BREW_KEY;


router.get('/:location', function(req, res, next) {

	var locationToSend = req.params.location;
	if (!req.params.location) {
		res.json({ failure: 'No location parameters set.' });
	}

	var options = {
		host: 'api.brewerydb.com',
		path: '/v2/locations?locality=' + encodeURI(locationToSend) + '&key=' + API_KEY 
	};

	var callback = function(response) {
		var str = '';
		response.on('data', function(chunk) {
			str += chunk;
		});
		response.on('end', function() {
			res.json(JSON.parse(str));
		});
	}

	http.request(options, callback).end();
});

module.exports = router;
