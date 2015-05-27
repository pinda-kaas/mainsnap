'use strict';

app.controller('GameOverCtrl', function ($scope, $timeout, _, $state, $stateParams) {

  console.log('start gameoverctrl', $stateParams);

  if ($stateParams.winner=='cpu') {
    $scope.winner = 'CPU wins the game!!!';
  }

  if ($stateParams.winner=='player') {
    $scope.winner = 'Player wins the game!!!';
  }

  if ($stateParams.winner=='draw') {
    $scope.winner = 'It is a draw.';
  }



})
;
