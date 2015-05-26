'use strict';

var app = angular
  .module('snapApp', ['ui.router']);

app.config(['$stateProvider', function ($stateProvider) {
  $stateProvider
    .state("startgame", {
      url: "/",
      templateUrl: '/views/game.html',
      controller: 'MainCtrl'
    })
    .state("player", {
      url: "/",
      templateUrl: '/views/game.html',
      controller: 'PlayerCtrl'
    })
    .state("snap", {
      url: "/",
      templateUrl: '/views/game.html',
      controller: 'SnapCtrl'
    })
    .state("cpu", {
      url: "/",
      templateUrl: '/views/game.html',
      controller: 'CpuCtrl'
    });
}]);

app.run(['$rootScope', '$state', '$stateParams', function ($rootScope,   $state, $stateParams) {
  $rootScope.$state = $state;
  $rootScope.$stateParams = $stateParams;
  $state.go('startgame');
}]);

app.constant('_', window._);
