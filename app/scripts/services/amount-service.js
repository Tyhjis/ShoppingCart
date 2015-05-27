'use strict';

angular.module('shoppingCartApp')
  .service('AmountService', function() {
    return {
        amount: 0,
        cartId: 0,
        setAmount: function(newValue) { this.amount = newValue ; }
    };
  });
