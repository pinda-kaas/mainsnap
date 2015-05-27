'use strict';

var app = angular
  .module('snapApp', ['ui.router']);

app.config(['$stateProvider', function ($stateProvider) {
  $stateProvider
    .state("home", {
      url: "/",
      templateUrl: '/views/game.html',
      controller: 'StartGameCtrl'
    })
    .state("start", {
      url: "/start",
      templateUrl: '/views/game.html',
      controller: 'StartGameCtrl'
    })
    .state("human", {
      url: "/human/:parms",
      templateUrl: '/views/game.html',
      controller: 'HumanCtrl'
    })
    .state("snap", {
      url: "/snap/:cards",
      templateUrl: '/views/game.html',
      controller: 'SnapCtrl'
    })
    .state("cpu", {
      url: "cpu/:parms",
      templateUrl: '/views/game.html',
      controller: 'CpuCtrl'
    })
    .state("gameover", {
      url: "gameover/:winner",
      templateUrl: '/views/game.html',
      controller: 'GameOverCtrl'
    });
}]);

app.run(['$rootScope', '$state', '$stateParams', function ($rootScope,   $state, $stateParams) {
  $state.go('start');

}]);

app.constant('_', window._);
