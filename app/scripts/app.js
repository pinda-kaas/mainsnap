'use strict';

/**
 * @ngdoc overview
 * @name snapApp
 * @description
 * # snapApp
 *
 * Main module of the application.
 */
 var app=angular
  .module('snapApp', [
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ]);

  app.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/test', {
        templateUrl: 'views/test.html',
        controller: ''
      })
      .otherwise({
        redirectTo: '/'
      });
  });

app.constant('_',window._);
