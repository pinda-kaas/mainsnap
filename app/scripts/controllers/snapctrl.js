'use strict';

app.controller('SnapCtrl', function ($scope, $timeout, _, $state, $stateParams) {

  debugger;
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




})
;
