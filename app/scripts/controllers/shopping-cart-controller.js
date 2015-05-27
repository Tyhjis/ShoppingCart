'use strict';

angular.module('shoppingCartApp')
  .controller('ShoppingCartCtrl', function($scope, ApiGetService, DataService, AmountService, localProducts) {
    // get shoppingcart
    $scope.amountService = AmountService;
    $scope.selectCart = function() {
      if(!$scope.amountService.cartId || $scope.amountService.cartId < 0) {
        $scope.amountService.cartId = 0;
      }
      ApiGetService.getShoppingCart($scope.amountService.cartId)
        .success(function(data) {
          $scope.products = data;
          $scope.amountService.setAmount(data.length);
        })
        .error(function() {});
    };
    $scope.selectCart();

    var localproducts = localProducts;
    // get local products
    if(!localproducts) { localproducts = DataService.getProducts(); }

    $scope.getProductName = function(id) {
      var i = localproducts.map(function(a) {
        return a.id;
      }).indexOf(id);
      if(i > -1) {
        return localproducts[i].name;
      } else {
        return 'Ei kannassa.';
      }
    };
  });
