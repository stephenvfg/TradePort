var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MessageSchema = new Schema({
	senderId: String,
	receiverId: String,
	text: String,
	createdAt: Number,
	purchaseId: String
});

module.exports = mongoose.model('Message', MessageSchema);
