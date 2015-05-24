'use strict';

app.controller('MainCtrl', function ($scope) {

  $scope.playerCards = [];
  $scope.cpuCards = [];
  $scope.centrePileCards = [];
  $scope.playerTurn = null;

  ///start of game
  //
  $scope.dealCards = function () {

    //reset all cards
    $scope.playerCards = [];
    $scope.cpuCards = [];
    $scope.centrePileCards = [];

    console.log('dealcards start');

    var nrs = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    var suits = ['c', 'h'];

    nrs.forEach(function (nr) {
      suits.forEach(function (st) {
        $scope.playerCards.push({number: nr, suit: st})
      });
    });


    var nrsc = ['A', 'J', '10', '6', '5', '7', '8', '9', '4', '3', 'Q', 'K', '2'];
    var suitsc = ['s', 'd'];

    nrsc.forEach(function (nr) {
      suitsc.forEach(function (st) {
        $scope.cpuCards.push({number: nr, suit: st})
      });
    });

    //debugger;

    console.log('player cards len', $scope.playerCards.length);
    console.log('cpu cards len', $scope.cpuCards.length);
  }

  $scope.startGame = function () {
    //choose random player
    $scope.playerTurn = Math.random() > 0.5 ? 1 : 0;

    //when the player is cpu trigger a pickcard
    if ($scope.playerTurn) {
      $scope.pickCard();
    }
  }

  //playerTurn p (integer ) picks card from their pile and places it on centre pile
  $scope.pickCard = function () {
    //if player
    debugger;
    if (!$scope.playerTurn && $scope.playerCards.length > 0) {
      $scope.centrePileCards.unshift($scope.playerCards[0]);
      $scope.playerCards.splice(0, 1)
    }
    else
    //cpu
    if ($scope.cpuCards.length > 0) {
      $scope.centrePileCards.unshift($scope.cpuCards[0]);
      $scope.cpuCards.splice(0, 1)
    }
  }

  //switch turns
  $scope.switchTurns = function () {
    $scope.playerTurn = !$scope.playerTurn;
    console.log($scope.centrePileCards.length);
    //when the player is cpu trigger a pickcard
    if ($scope.playerTurn) {$scope.pickCardCpu();}
  }

  //pickcard by cpu
  $scope.pickCardCpu=function(){
    $scope.pickCard();
    $scope.switchTurns();
  }

});
