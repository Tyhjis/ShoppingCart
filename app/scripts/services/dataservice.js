'use strict';

angular.module('shoppingCartApp')
  .service('DataService', function($http) {
    var products = null;


    var getProducts = function() {
      $http.get('/localproducts.json')
        .success(function(data) {
          products = data;
        })
        .error(function() {
          products = null;
        });
      return products;
    };

    return {
      getProducts: getProducts
    };
  });
