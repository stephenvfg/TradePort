var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProductSchema = new Schema({
	title: String,
	description: String,
	location: String,
	lat: Number,
	long: Number,
	userId: String,
	imageId: String,
	tags: [String],
	askingPrice: Number,
	sold: {type: Boolean, default: false}
});

module.exports = mongoose.model('Product', ProductSchema);
