'use strict';

angular.module('shoppingCartApp')
  .controller('ProductsCtrl', function($http, $scope, ApiPostService, ApiGetService, DataService, products, AmountService) {
    $scope.products = products;
    $scope.amountService = AmountService;

    if(!products) {
      $scope.products = DataService.getProducts();
    }

    $scope.sendToShoppingCart = function(id, quantity) {
      if(typeof quantity === 'number' && quantity > 0 && $scope.cartId > 0) {
        ApiPostService.saveShoppingCart($scope.amountService.cartId, id, quantity)
          .success(function() {
            updateCartAmount();
          })
          .error(function() {
          });
      }
    };

    function updateCartAmount() {
      ApiGetService.getShoppingCart($scope.amountService.cartId)
        .success(function(data) {
          $scope.amountService.setAmount(data.length);
        })
        .error(function() {
        });
    }
    updateCartAmount();
  });
