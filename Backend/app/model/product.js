var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProductSchema = new Schema({
	id: Number,
	description: String,
	location: String,
	lat: Number,
	long: Number,
	userId: Number,
	tags: [String],
	photoUrl: String
});

module.exports = mongoose.model('Product', ProductSchema);
