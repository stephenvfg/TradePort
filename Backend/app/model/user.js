var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
	name: String,
	location: String,
	lat: Number,
	long: Number
});

module.exports = mongoose.model('User', UserSchema);
