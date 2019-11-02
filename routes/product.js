/* this module contains REST routes related user */
var express = require('express');
var router = express.Router();

router.get('/all', (req, res) => {
	res.send('all products');
});


router.post('/add', (req, res) => {
	res.send('product added successfully.');
});

module.exports = router;