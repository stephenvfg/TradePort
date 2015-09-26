var multer  = require('multer')
var upload = multer({ dest: './public/upload/' })
var User = require('./model/user')
var Product = require('./model/product')
var clarifaiConf = require('../config/clarifai')
var fs = require('fs')
var Currency = require('./model/currency')

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
			return res.json(userRecord)
		})
    })

    app.get('/users', function (req, res) {
    	User.find({}).lean().exec(function (err, users) {
    		if(err) {
    			res.error('can not load users')
    		}
		    return res.json(users)
		})
    })

    app.get('/users/:id', function (req, res) {
    	var userId = req.params.id
    	User.findOne({ _id: userId }).lean().exec(function (err, user) {
    		if(err) {
    			res.error('can not find user')
    		}
		    return res.json(user)
		})
    })

	app.get('/users/email/:email', function (req, res) {
		var email = req.params.email
		User.findOne({ email: email }).lean().exec(function (err, user) {
			if(err) {
				res.error('can not find user')
			}
			return res.json(user)
		})
	})

    app.post('/products', upload.single('img'), function (req, res) {
    	var product = new Product(req.body)
    	delete req.file.buffer
    	product.imgProps = req.file;

		product.save(function(err, productRecord) {
			if(err) {
				res.error('can not create product')
			}
			fs.rename(req.file.path, 'public/upload/' + product._id + '___' + product.imgProps.originalname, function (err) {
		        if (err) {
		        	res.error('can not upload file')
		        }
				return res.json(productRecord)
		    });
		})
    })

    app.get('/products', function (req, res) {
    	Product.find({}).sort({'_id': 'desc'}).lean().exec(function (err, products) {
    		if(err) {
    			res.error('can not load products')
    		}
		    return res.json(products)
		})
    })

    app.get('/products/:id', function (req, res) {
    	var productId = req.params.id
    	Product.findOne({ _id: productId }).lean().exec(function (err, product) {
    		if(err) {
    			res.error('can not find product')
    		}
		    return res.json(product)
		})
    })

    app.get('/products/:id/img', function (req, res) {
    	var productId = req.params.id
    	Product.findOne({ _id: productId }).lean().exec(function (err, product) {
    		if(err) {
    			res.error('can not find product')
    		}
		    res.contentType(product.imgProps.mimetype);
          	return res.send(fs.readFileSync('public/upload/' + product._id + '___' + product.imgProps.originalname));
		})
    })
	app.post('/currencies', function (req, res) {
		var currency = new Currency(req.body)
		currency.save(function(err, currencyRecord) {
			if(err) {
				res.error('can not create product')
			}
			return res.json(currencyRecord)
		})
	})

	app.get('/currencies', function (req, res) {
		Currency.find({}).sort({'_id': 'desc'}).lean().exec(function (err, currencies) {
			if(err) {
				res.error('can not load products')
			}
			return res.json(currencies)
		})
	})

	app.get('/currencies/:id', function (req, res) {
		var currenciesId = req.params.id
		Currency.findOne({ _id: currenciesId }).lean().exec(function (err, currency) {
			if(err) {
				res.error('can not find product')
			}
			return res.json(currency)
		})
	})
};
