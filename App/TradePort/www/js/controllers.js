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
