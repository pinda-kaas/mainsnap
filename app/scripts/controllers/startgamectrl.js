'use strict';

app.controller('StartGameCtrl', function ($scope, $timeout, $state) {

  $scope.playerCards = [];
  $scope.cpuCards = [];
  var allCards= [];

  $scope.centrePileCards=[];

  //deals cards and goes to either cpu or human state
  $scope.startGame = function (p,nrs,suits) {
    var cards=[];
    $scope.snap = false;
    nrs.forEach(function (nr) {
      suits.forEach(function (st) {
        cards.push({number: nr, suit: st})
      });
    });

    //shuffle the cards
    var shuf = $scope.shuffle(cards);

    //divide into player and cpu cards
    $scope.playerCards = shuf.slice(0,shuf.length/2);
    $scope.cpuCards = shuf.slice(shuf.length/2,shuf.length);

    allCards.push($scope.playerCards);
    allCards.push($scope.cpuCards);
    //centrepile
    allCards.push([]);

    $scope.centrePileCards=allCards;

    //debugger;
    //if (p) {
    //  $state.go('cpu', {parms:JSON.stringify(allCards)});
    //}
    //else {
    $state.go('human', {parms:JSON.stringify(allCards)});
    //
    //}
  }

  //shuffle the cards
  $scope.shuffle = function (array) {
    var m = array.length, t, i;
    while (m) {
      i = Math.floor(Math.random() * m--);
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }
    return array;
  }

  //choose random player to start
  $scope.playerTurn = Math.random() > 0.5 ? 1 : 0;

  //$scope.startGame($scope.playerTurn,['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'], ['s', 'h', 'd', 'c']);
  $scope.startGame($scope.playerTurn,['2','3'], ['s','s']);
});
