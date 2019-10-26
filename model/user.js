var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
	username: { type: String, unique: true},
	email: {type: String, unique: true},
	password: { type: String}
});

/* Map with Object into DB table */
module.exports = mongoose.model('User', userSchema);
