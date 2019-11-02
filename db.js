var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/flipkart');

mongoose.connection.on('connected', function() {
	console.log('DB connection successful');
	
});

mongoose.connection.on('error', function() {
	console.log('Error while connecting to DB');
});

mongoose.connection.on('disconnected', function() {
	console.log('DB disconnected');
});