'use strict';

angular.module('shoppingCartApp')
  .service('ApiGetService', function($http) {
    var URL = 'http://api.heatenin.gs:3000/shop/';

    // The total amount of shops.
    var getShopTotal = function() {
      return $http.get(URL);
    };

    // The contents of one shop.
    var getShoppingCart = function(cartId) {
      return $http.get(URL + cartId);
    };

    return {
      getShopTotal: getShopTotal,
      getShoppingCart: getShoppingCart
    };

  });
