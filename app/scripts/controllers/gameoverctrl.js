'use strict';

app.controller('GameOverCtrl', function ($scope, $timeout, _, $state, $stateParams) {

  $scope.playerCards = JSON.parse(localStorage.getItem('playerCards'));
  $scope.cpuCards = JSON.parse(localStorage.getItem('cpuCards'));
  $scope.centrePileCards = JSON.parse(localStorage.getItem('centrePileCards'));

  console.log('start gameoverctrl', $stateParams);
  if ($stateParams.winner=='c') {
    $scope.winner = 'CPU wins the game!!!';
  }
  else {
    $scope.winner = 'Player wins the game!!!';
  }

  localStorage.setItem('playerCards',JSON.stringify($scope.playerCards));
  localStorage.setItem('cpuCards',JSON.stringify($scope.cpuCards));
  localStorage.setItem('centrePileCards',JSON.stringify($scope.centrePileCards));


})
;
