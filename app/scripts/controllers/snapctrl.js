'use strict';

app.controller('SnapCtrl', function ($scope, $timeout, _, $state, $stateParams) {

  var allCards = JSON.parse($stateParams.cards);

  $scope.centrePileCards = allCards[2];
  //testing only
  $scope.playerCards = allCards[0];
  $scope.cpuCards = allCards[1];


  function whoSnapped() {
    if ($stateParams.player == 'cpu') {
      $scope.cpuCards = _.union($scope.cpuCards, $scope.centrePileCards);
      $scope.snapper = 'CPU calls snap';

      //$timeout(function () {
      //  $state.go('human', {parms: JSON.stringify(allCards)});
      //}, 2000);

    }
    else {
      $scope.playerCards = _.union($scope.playerCards, $scope.centrePileCards);
      $scope.snapper = 'player calls snap';

      //$timeout(function () {
      //  $state.go('cpu', {parms: JSON.stringify(allCards)});
      //}, 2000);
    }

    $scope.centrePileCards = allCards[2] = [];
  }

  function checkWinner() {
    if (allCards[1].length == 0 && allCards[0].length == 0) {
      $state.go('gameover', {winner: 'draw'});
    }

    if (allCards[1].length == 0 && allCards[0].length > 0) {
      $state.go('gameover', {winner: 'player'});
    }

    if (allCards[1].length > 0 && allCards[0].length == 0) {
      $state.go('gameover', {winner: 'cpu'});
    }

    //go to cpu or human

    $state.go('human', {parms: JSON.stringify(allCards)});

  }

  whoSnapped();

  checkWinner();




})
;
