/**
 * Created by Vadym on 26/09/15.
 */


module.exports = function (app) {
    app.get('/', function (req, res) {
        res.status(200).json({result: null});
    })
};