'use strict';

angular.module('shoppingCartApp')
  .service('ApiPostService', function($http) {

    this.saveShoppingCart = function(shopId, productId, amount) {
      var URL = 'http://api.heatenin.gs:3000/shop/' + shopId;
      return $http({
         method: 'POST',
         params: {
           productId: productId,
           productAmount: amount
         },
         headers: { 'Content-Type':'application/x-www-form-urlencoded' },
         url: URL,
         });
    };

  });
