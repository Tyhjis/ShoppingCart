'use strict';

/**
 * @ngdoc function
 * @name shoppingCartApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the shoppingCartApp
 */
angular.module('shoppingCartApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
