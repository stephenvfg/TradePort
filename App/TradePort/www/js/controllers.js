/* var currencies = [{
    currency: USD,  
    exchangeRate: {
        "USD": 1.00
        "EUR": 0.89
        "GBP": 0.66
        "JPY": 120.6
        "CHF": 0.98
        "CAD": 1.33
        "AUD": 1.42
        "ZAR": 13.93
        "CNY": 6.37
        "SGD": 1.43
        "HKD": 7.75
        "INR": 66.16
        "AED": 3.67
    }
},
{
    currency: EUR,  
    exchangeRate: {
        "USD": 1.12
        "EUR": 1.00
        "GBP": 0.74
        "JPY": 135.01
        "CHF": 1.10
        "CAD": 1.49
        "AUD": 1.59
        "ZAR": 15.59
        "CNY": 7.14
        "SGD": 1.6
        "HKD": 8.68
        "INR": 74.07
        "AED": 4.11
    }
},
{
    currency: GBP,  
    exchangeRate: {
        "USD": 1.52
        "EUR": 1.36
        "GBP": 1.00
        "JPY": 183.07
        "CHF": 1.49
        "CAD": 2.02
        "AUD": 2.16
        "ZAR": 21.14
        "CNY": 9.68
        "SGD": 2.17
        "HKD": 11.77
        "INR": 100.44
        "AED": 5.57
    }
},
{
    currency: JPY,  
    exchangeRate: {
        "USD": 0.01
        "EUR": 0.01
        "GBP": 0.01
        "JPY": 1.00
        "CHF": 0.0081
        "CAD": 0.011
        "AUD": 0.012
        "ZAR": 0.12
        "CNY": 0.053
        "SGD": 0.012
        "HKD": 0.064
        "INR": 0.55
        "AED": 0.03
    }
},
{
    currency: CHF,  
    exchangeRate: {
        "USD": 1.02
        "EUR": 0.91
        "GBP": 0.67
        "JPY": 123.18
        "CHF": 1.00
        "CAD": 1.36
        "AUD": 1.45
        "ZAR": 14.23
        "CNY": 6.51
        "SGD": 1.46
        "HKD": 7.92
        "INR": 67.58
        "AED": 3.75
    }
},
{
    currency: CAD,  
    exchangeRate: {
        "USD": 0.75
        "EUR": 0.67
        "GBP": 0.49
        "JPY": 90.44
        "CHF": 0.73
        "CAD": 1.00
        "AUD": 1.07
        "ZAR": 10.44
        "CNY": 4.78
        "SGD": 1.07
        "HKD": 5.81
        "INR": 49.62
        "AED": 2.75
    }
},
{
    currency: AUD,  
    exchangeRate: {
        "USD": 0.70
        "EUR": 0.63
        "GBP": 0.46
        "JPY": 84.72
        "CHF": 0.69
        "CAD": 0.94
        "AUD": 1.00
        "ZAR": 9.78
        "CNY": 4.48
        "SGD": 1.00
        "HKD": 5.45
        "INR": 46.48
        "AED": 2.58
    }
},
{
    currency: ZAR,  
    exchangeRate: {
        "USD": 0.07
        "EUR": 0.06
        "GBP": 0.05
        "JPY": 8.66
        "CHF": 0.07
        "CAD": 0.10
        "AUD": 0.10
        "ZAR": 1.00
        "CNY": 0.46
        "SGD": 0.10
        "HKD": 0.56
        "INR": 4.75
        "AED": 0.26
    }
},
{
    currency: CNY,  
    exchangeRate: {
        "USD": 0.16
        "EUR": 0.14
        "GBP": 0.10
        "JPY": 18.92
        "CHF": 0.15
        "CAD": 0.21
        "AUD": 0.22
        "ZAR": 2.18
        "CNY": 1.00
        "SGD": 0.22
        "HKD": 1.22
        "INR": 10.38
        "AED": 0.58
    }
},
{
    currency: SGD,  
    exchangeRate: {
        "USD": 0.70
        "EUR": 0.63
        "GBP": 0.46
        "JPY": 84.48
        "CHF": 0.69
        "CAD": 0.93
        "AUD": 1.00
        "ZAR": 9.76
        "CNY": 4.47
        "SGD": 1.00
        "HKD": 5.43
        "INR": 46.35
        "AED": 2.57
    }
},
{
    currency: HKD,  
    exchangeRate: {
        "USD": 0.13
        "EUR": 0.12
        "GBP": 0.08
        "JPY": 15.55
        "CHF": 0.13
        "CAD": 0.17
        "AUD": 0.18
        "ZAR": 1.80
        "CNY": 0.82
        "SGD": 0.18
        "HKD": 1.00
        "INR": 8.53
        "AED": 0.47
    }
},
{
    currency: INR,  
    exchangeRate: {
        "USD": 0.02
        "EUR": 0.01
        "GBP": 0.01
        "JPY": 1.82
        "CHF": 0.01
        "CAD": 0.02
        "AUD": 0.02
        "ZAR": 0.21
        "CNY": 0.10
        "SGD": 0.02
        "HKD": 0.12
        "INR": 1.00
        "AED": 0.056
    }
},
{
    currency: AED,  
    exchangeRate: {
        "USD": 0.27
        "EUR": 0.24
        "GBP": 0.18
        "JPY": 32.84
        "CHF": 0.27
        "CAD": 0.36
        "AUD": 0.39
        "ZAR": 3.79
        "CNY": 1.74
        "SGD": 0.39
        "HKD": 2.11
        "INR": 18.02
        "AED": 1.00
    }
}]; */

angular.module('starter.controllers', [])

    .controller('DashCtrl', function($scope, $state, Product) {
        var canLoadMore = true;
        $scope.products = [];

        $scope.$on('$ionicView.enter', function(e) {
            canLoadMore = true;
            $scope.products = [];
        });

        $scope.doRefresh = function () {
            canLoadMore = false;
            // reset to empty
            $scope.products = [];

            Product.all(0, 10).success(function (products) {
                $scope.products = products;
                canLoadMore = true;
            }).finally(function() {
                $scope.$broadcast('scroll.refreshComplete');
            });
        };

        $scope.trade = function () {
            $state.go('tab.trade');
        };

        $scope.canLoadMore = function () {
            return canLoadMore;
        };

        $scope.loadMore = function () {
            canLoadMore = false;
            Product.all(0, 10).success(function (products) {

                if (!products || products.length == 0)
                    return;

                canLoadMore = true;
                $scope.products = $scope.products.concat(products);
            });
        }
    })

    .controller('ChatsCtrl', function($scope, Chats) {
        // With the new view caching in Ionic, Controllers are only called
        // when they are recreated or on app start, instead of every page change.
        // To listen for when this page is active (for example, to refresh data),
        // listen for the $ionicView.enter event:
        //
        //$scope.$on('$ionicView.enter', function(e) {
        //});

        $scope.chats = Chats.all();
        $scope.remove = function(chat) {
            Chats.remove(chat);
        };
    })

    .controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
        $scope.chat = Chats.get($stateParams.chatId);
    })

    .controller('TradeCtrl', function ($scope, $state, Camera, User, Product) {
        function resetData() {
            $scope.user = globalUser;
            $scope.product = {
                title: '',
                description: '',
                images: [],
                askingPrice: ''
            };
        }
        function createProduct(userId) {
            $scope.product.userId = userId;
            Product.create($scope.product).success(function () {
                resetData();
            })
        }

        resetData();

        $scope.addPhoto = function () {
            Camera.getPicture().then(function(imageURI) {
                product.images.push(imageURI);
                //$ionicLoading.hide();
                $state.go('tab.transactions');
            }, function(err) {
                $state.go('tab.transactions');
                console.err(err);
            });
        };

        $scope.trade = function () {
            if (!$scope.user.email) {
                return;
            }

            User.getByEmail($scope.user.email).success(function (users) {
                if (!users) {
                    User.create($scope.user).success(function (userObj) {
                        if (userObj._id) {
                            globalUser = userObj;
                            createProduct(userObj._id)
                        }
                    })
                } else {
                    createProduct(users._id)
                }
            })
        };
    })

    .controller('AccountCtrl', function($scope) {
        $scope.settings = {
            enableFriends: true
        };
    })


    .controller('ProductCtrl', function($scope, $stateParams, Product) {
        $scope.product = {};
        Product.get($stateParams.productId).success(function (product) {
            $scope.product = product;
        })
    })

    .controller('CurrencyCtrl', function ($scope, $state, Currency) {
        var canLoadMore = true;
        $scope.currencies = [];

        $scope.trade = function () {
            $state.go('tab.trade-currency');
        };

        $scope.doRefresh = function () {
            canLoadMore = false;
            // reset to empty
            $scope.currencies = [];

            Currency.all(0, 10).success(function (currencies) {
                $scope.currencies = currencies;
                canLoadMore = true;
            }).finally(function() {
                $scope.$broadcast('scroll.refreshComplete');
            });
        };

        $scope.canLoadMore = function () {
            return canLoadMore;
        };

        $scope.loadMore = function () {
            canLoadMore = false;
            Currency.all(0, 10).success(function (currencies) {
                if (!currencies || currencies.length == 0)
                    return;

                canLoadMore = true;
                $scope.currencies = $scope.currencies.concat(currencies);
            });
        }
    })

    .controller('TradeCurrencyCtrl', function ($scope) {
        $scope.currenciesArray = ['EUR', 'USD', 'GPB', 'INR', 'AUD', 'CAD', 'SGD', 'CHF'];
        function resetData() {
            $scope.user = globalUser;
            $scope.currency = {
                description: '',
                amount: 0,
                have: '',
                need: '',
                exchangeRate: ''
            };
        }
        function createCurrency(userId) {
            $scope.currency.userId = userId;
            Currency.create($scope.currency).success(function () {
                resetData();
            })
        }

        resetData();

        $scope.trade = function () {
            if (!$scope.user.email) {
                return;
            }

            User.getByEmail($scope.user.email).success(function (users) {
                if (!users) {
                    User.create($scope.user).success(function (userObj) {
                        if (userObj._id) {
                            globalUser = userObj;
                            createCurrency(userObj._id)
                        }
                    })
                } else {
                    createCurrency(users._id)
                }
            })
        };
    })
;
