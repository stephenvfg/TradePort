var multer  = require('multer')
var upload = multer({ dest: './public/upload/' })
var User = require('./model/user')
var Product = require('./model/product')
var Image = require('./model/image')
var clarifaiConf = require('../config/clarifai')
var fs = require('fs')
var Currency = require('./model/currency')
var Purchase = require('./model/purchase')

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
    	User.findById(userId, function (err, user) {
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

	app.post('/images', upload.single('img'), function (req, res) {
    	var image = new Image(req.body)
    	delete req.file.buffer
    	image.metadata = req.file
    	image.createdAt = (new Date()).getTime()

    	image.save(function(err, imageRecord) {
    		fs.rename(req.file.path, 'public/upload/' + image.createdAt + '___' + image.metadata.originalname, function (err) {
		        if (err) {
		        	res.error('can not upload file')
		        }
				return res.json(imageRecord)
		    })
    	})
    })

    app.post('/products', function (req, res) {
    	var product = new Product(req.body)

		product.save(function(err, productRecord) {
			if(err) {
				res.error('can not create product')
			}
			return res.json(productRecord)
		})
    })

    app.get('/products', function (req, res) {
    	Product.find({sold: false}).sort({'_id': 'desc'}).lean().exec(function (err, products) {
    		if(err) {
    			res.error('can not load products')
    		}
		    return res.json(products)
		})
    })

    app.get('/products/:id', function (req, res) {
    	var productId = req.params.id
    	Product.findById(productId, function (err, product) {
    		if(err) {
    			res.error('can not find product')
    		}
		    return res.json(product)
		})
    })

    app.get('/products/:id/img', function (req, res) {
    	var productId = req.params.id
    	Product.findById(productId, function (err, product) {
    		if(err) {
    			res.error('can not find product')
    		}
    		Image.findById(product.imageId, function (err, image) {
	    		if(err) {
	    			res.error('can not find product')
	    		}
			    res.contentType(image.metadata.mimetype)
          		return res.send(fs.readFileSync('public/upload/' + image.createdAt + '___' + image.metadata.originalname))
			})
		})
    })

	app.post('/currencies', function (req, res) {
		var currency = new Currency({amount: "100",description: "asdawd",exchangeRate: 0.89, have: "USD", need: "EUR", userId: "56072eb59abfcab503f7e87c"})
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


	app.post('/purchases', function (req, res) {
		var purchase = new Purchase(req.body)
		purchase.save(function(err, purchaseRecord) {
			if(err) {
				res.error('can not create product')
			}
			return res.json(purchaseRecord)
		})
	})

	app.get('/purchases', function (req, res) {
		Purchase.find({}).sort({'_id': 'desc'}).lean().exec(function (err, purchases) {
			if(err) {
				res.error('can not load products')
			}

			//purchases.forEach(function (purchase) {
			//	if (purchase.type === 'product') {
			//		Product.findOne({_id: purchase.itemId}).lean().exec(function (err, product) {
			//			if (err) {
			//				res.error('error');
			//			}
			//			purchase.product = product;
			//		});
			//	}
			//});

			return res.json(purchases);
		})
	})

	app.get('/purchases/:id', function (req, res) {
		var purchasesId = req.params.id
		Purchase.findOne({ _id: purchasesId }).lean().exec(function (err, purchase) {
			if(err) {
				res.error('can not find product')
			}
			return res.json(purchase)
		})
	})
};
