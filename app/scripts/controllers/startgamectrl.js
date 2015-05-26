'use strict';

app.controller('StartGameCtrl', function ($scope, $timeout, $state) {

  $scope.playerCards = [];
  $scope.cpuCards = [];
  var allCards= [];
  console.log('startgame ctrl init');

  $scope.startGame = function (p) {
    $scope.snap = false;
    $scope.dealCards(['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'], ['s', 'h', 'd', 'c']);
    //$scope.dealCards(['2','3'],['s','h']);

    if (p) {


      $state.go('cpu', {parms:JSON.stringify(allCards)});
    }
    else {
      $state.go('human', {stack: {"id": 1}});
    }
  }

  $scope.dealCards = function (nrs,suits) {
    var cards=[];

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
  $scope.startGame($scope.playerTurn);

});
