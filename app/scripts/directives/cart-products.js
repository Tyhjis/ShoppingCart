'use strict';

angular.module('shoppingCartApp')
  .directive('cartProducts', function() {
    return {
      restrict: 'EA',
      scope: {
        amount: '=amount'
      },
      template: '{{amount}}'
    };
  });
