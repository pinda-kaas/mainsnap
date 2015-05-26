'use strict';

app.controller('SnapCtrl', function ($scope, $timeout, _, $state, $stateParams) {

  $scope.playerCards = JSON.parse(localStorage.getItem('playerCards'));
  $scope.cpuCards = JSON.parse(localStorage.getItem('cpuCards'));
  $scope.centrePileCards = JSON.parse(localStorage.getItem('centrePileCards'));

  console.log('start snapctrl', $stateParams);
  if ($stateParams.player=='c') {
    $scope.cpuCards = _.union($scope.cpuCards, $scope.centrePileCards);
    $scope.snapper = 'CPU calls snap';
  }
  else {
    $scope.playerCards = _.union($scope.playerCards, $scope.centrePileCards);
    $scope.snapper = 'player calls snap';
  }

  $scope.snap = true;
  $scope.centrePileCards = [];


  localStorage.setItem('playerCards',JSON.stringify($scope.playerCards));
  localStorage.setItem('cpuCards',JSON.stringify($scope.cpuCards));
  localStorage.setItem('centrePileCards',JSON.stringify($scope.centrePileCards));


})
;
