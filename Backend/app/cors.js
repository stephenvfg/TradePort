/**
 * Created by Vadym on 26/09/15.
 */
module.exports = function() {
    return function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
        res.header("Access-Control-Allow-Headers", "X-Requested-With,Content-Type,Cache-Control");
        if (req.method === 'OPTIONS') {
            res.statusCode = 204;
            return res.end();
        } else {
            return next();
        }
    };
}