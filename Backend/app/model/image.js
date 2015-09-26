var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ImageSchema = new Schema({
	createdAt: Number,
	metadata: Object
});

module.exports = mongoose.model('Image', ImageSchema);
