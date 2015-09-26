var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProductSchema = new Schema({
	title: String,
	description: String,
	location: String,
	lat: Number,
	long: Number,
	userId: String,
	tags: [String],
	imgBuffer: Buffer,
	imgProps: Object,
	askingPrice: Number
});

module.exports = mongoose.model('Product', ProductSchema);
