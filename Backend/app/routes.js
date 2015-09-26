/**
 * Created by Vadym on 26/09/15.
 */
var User = require('./model/user')
var Product = require('./model/product')

module.exports = function (app) {
    app.get('/', function (req, res) {
        res.status(200).json({result: null});
    })

    app.post('/users', function (req, res) {
    	var user = new User(req.body)
		user.save(function(err, userRecord) {
			if(err) {
				res.error('can not create user')
			}
			return res.json(JSON.stringify(userRecord))
		})
    })

    app.get('/users', function (req, res) {
    	User.find({}).lean().exec(function (err, users) {
    		if(err) {
    			res.error('can not load users')
    		}
		    return res.json(JSON.stringify(users))
		})
    })

    app.get('/users/:id', function (req, res) {
    	var userId = req.params.id
    	User.findOne({ _id: userId }).lean().exec(function (err, user) {
    		if(err) {
    			res.error('can not find user')
    		}
		    return res.json(JSON.stringify(user))
		})
    })

    app.post('/products', function (req, res) {
    	var product = new Product(req.body)
		product.save(function(err, productRecord) {
			if(err) {
				res.error('can not create product')
			}
			return res.json(JSON.stringify(productRecord))
		})
    })

    app.get('/products', function (req, res) {
    	Product.find({}).lean().exec(function (err, products) {
    		if(err) {
    			res.error('can not load products')
    		}
		    return res.json(JSON.stringify(products))
		})
    })

    app.get('/products/:id', function (req, res) {
    	var productId = req.params.id
    	Product.findOne({ _id: productId }).lean().exec(function (err, product) {
    		if(err) {
    			res.error('can not find product')
    		}
		    return res.json(JSON.stringify(product))
		})
    })
};
