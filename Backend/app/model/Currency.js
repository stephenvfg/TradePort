/**
 * Created by Vadym on 26/09/15.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CurrencySchema = new Schema({
    location: String,
    lat: Number,
    long: Number,
    userId: String,
    have: String,
    need: String,
    amount: Number,
    exchangeRate: Number,
    description: String,
    sold: {type: Boolean, default: false}
});

module.exports = mongoose.model('Currency', CurrencySchema);
