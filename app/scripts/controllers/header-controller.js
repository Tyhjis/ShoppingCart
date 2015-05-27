'use strict';

angular.module('shoppingCartApp')
  .controller('HeaderController', function($scope, ApiGetService, AmountService) {
    $scope.amount = AmountService;
    $scope.displayAmount = function() {
      console.log(AmountService.amount);
    };
  });
