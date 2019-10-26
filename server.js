var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var db = require('./db');
var User = require('./model/user');

var app = express();

app.use(bodyParser.json()); //convert reques into JSON
//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true })); //support convertion of POST into JSON

app.get('/', function(req, res) {
	res.sendFile(__dirname + '/register.html');
});

/* http://localhost:3000/users */
app.get('/users', function(req, res) {
	User.find(function(err, results) {
		res.json(results);
	});
});

app.post('/register', function(req, res) {

	console.log(req.body);
	var userModel = new User();
	userModel.username = req.body.username;
	userModel.email = req.body.email;
	userModel.password = req.body.password;

	userModel.save(function(err, data) {
		if(err)
			console.log('Error while inserting data into user table', error);
		else if(data == null){
			console.log('No data returned from users table');
		}
		else {
			res.json(data);
		}
	});

});

app.listen(3000, function() {
	console.log('Server listening on port 3000');
});