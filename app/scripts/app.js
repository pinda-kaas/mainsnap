'use strict';

var app = angular
  .module('snapApp', ['ui.router']);

app.config(['$stateProvider', function ($stateProvider) {
  $stateProvider
    .state("startgame", {
      url: "/",
      templateUrl: '/views/game.html',
      controller: 'StartGameCtrl'
    })
    .state("human", {
      url: "/",
      templateUrl: '/views/game.html',
      controller: 'HumanCtrl'

    })
    .state("snap", {
      url: "/:player",
      templateUrl: '/views/game.html',
      controller: 'SnapCtrl'
    })
    .state("cpu", {
      url: "/:parms",
      templateUrl: '/views/game.html',
      controller: 'CpuCtrl'
    })
    .state("gameover", {
      url: "/:winner",
      templateUrl: '/views/game.html',
      controller: 'GameOverCtrl'
    });
}]);

app.run(['$rootScope', '$state', '$stateParams', function ($rootScope,   $state, $stateParams) {
  $rootScope.$state = $state;
  $rootScope.$stateParams = $stateParams;
  $state.go('startgame');
}]);

app.constant('_', window._);
