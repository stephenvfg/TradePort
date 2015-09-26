/**
 * Created by Vadym on 26/09/15.
 */
module.exports = function() {
    return function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "X-Requested-With");
        next();
    };
}