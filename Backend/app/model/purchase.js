/**
 * Created by Vadym on 27/09/15.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PurchaseSchema = new Schema({
    purchaseId: Number,
    type: String,
    userId: Number
});

module.exports = mongoose.model('Purchase', PurchaseSchema);
