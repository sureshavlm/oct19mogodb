var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var bookSchema = new Schema({
	name: { type: String, unique: true},
	author: { type: String, unique: true},
	createddate: { type: Date, default: Date.now },
	comments: [{ body: String, user: String}]
});

module.exports = mongoose.model('book', bookSchema);