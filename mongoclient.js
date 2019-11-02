const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
var userRoute = require('./routes/user');
var productRoute = require('./routes/product');
var orders = require('./routes/orders')

var app = express();


const port = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
	console.log(new Date());
	next();
});

app.listen(port, () => {
	console.log('server started on port %s ', port);
});

app.get('/mybalance', [function(req, res, next) {
	if(req.body.isUserLoggedIn)
		next();
	else
		res.send('Invalid User');

}, function(req, res) {
	res.send('$30000');
}]);


app.get('/', (req, res) => {
	res.sendFile(__dirname + '/sign.html');
});


app.use('/user', userRoute);
app.use('/orders', orders);
app.use('/products', productRoute);

