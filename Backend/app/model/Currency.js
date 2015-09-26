/**
 * Created by Vadym on 26/09/15.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CurrencySchema = new Schema({
    location: String,
    lat: Number,
    long: Number,
    userId: Number,
    have: String,
    need: String,
    amount: Number,
    exchangeRate: Number
});

module.exports = mongoose.model('Currency', CurrencySchema);