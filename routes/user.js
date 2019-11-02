/* this module contains REST routes related user */
var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;

const mongurl = 'mongodb://localhost:27017/';

db = null;

MongoClient.connect(mongurl, {useNewUrlParser: true}, (err, client) => {
	if(err) throw err;
	db = client.db('flipkart');//using flipkart database
});

router.get('/users', (req, res) => {
	db.collection('users').find().toArray(function(err, data) {
		if(err) throw err;
		res.json(data);
	});

});

router.post('/add', (req, res) => {
	db.collection('users').insert(req.body, (err, data) => {
		if(err) throw err;

		res.json(data);
	});
});

router.put('/user', (req, res) => {
	if(db != null){
		db.collection('users').find().toArray(function(err, data) {
			if(err) throw err;
			res.json(data);
		});
	}
});

module.exports = router;