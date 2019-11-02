var mongoose = require('mongoose');
var express = require('express');
var Book = require('./model/book');

var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/flipkart');



app.listen(3000, function(req, res) {

	console.log('Listing on port 30000');
});

app.get('/books', function(req, res) {
	Book.find(function(err, data) {
		if(err) throw err;
		res.json(data);
	});
});

app.post('/createbook', function(req, res) {
	var book = new Book(); //real table access as object
	book.name = req.body.bookname;
	book.author = req.body.author;

	book.save(function(err, data) {
		if(err) throw err;
		res.json(data);
	});
});


app.get('/', function(req, res) {
	res.sendFile(__dirname + '/book.html');
});
