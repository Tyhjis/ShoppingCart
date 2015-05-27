'use strict';

/**
 * @ngdoc overview
 * @name shoppingCartApp
 * @description
 * # shoppingCartApp
 *
 * Main module of the application.
 */
angular
  .module('shoppingCartApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/etusivu.html',
        controller: 'MainCtrl'
      })
      .when('/ostoskori', {
        templateUrl: 'views/ostoskori.html',
        controller: 'ShoppingCartCtrl',
        resolve: {
          localProducts: function(DataService) {
            return DataService.getProducts();
          }
        }
      })
      .when('/tuotteet', {
        templateUrl: 'views/tuotteet.html',
        controller: 'ProductsCtrl',
        resolve: {
          products: function(DataService) {
            return DataService.getProducts();
          }
        }
      })
      .otherwise({
        redirectTo: '/'
      });
  });

  angular.module('shoppingCartApp')
    .config(['$httpProvider', function($httpProvider) {
      delete $httpProvider.defaults.headers.common['X-Requested-With'];
    }]);
