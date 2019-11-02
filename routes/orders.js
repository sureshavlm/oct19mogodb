var express = require('express');

var router = express.Router();

router.get('/create', (req, res) => {
	res.send('order created');
});

module.exports = router;