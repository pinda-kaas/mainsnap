'use strict';

 var app=angular
  .module('snapApp', [
    'ngRoute'
   ]);

  app.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

app.constant('_',window._);
