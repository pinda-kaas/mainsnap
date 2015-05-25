'use strict';

app.controller('MainCtrl', function ($scope, $timeout, _) {

  $scope.playerCards = [];
  $scope.cpuCards = [];
  $scope.centrePileCards = [];
  $scope.playerTurn = null;
  $scope.snap = false;
  $scope.reactionTimeCpu = 10000;

  ///start of game
  //initialize variables
  //dealcards
  //trigger card placement if player is cpu
  $scope.startGame = function () {
    $scope.snap = false;

    //choose random player
    $scope.playerTurn = Math.random() > 0.5 ? 1 : 0;

    $scope.dealCards();

    if ($scope.playerTurn) {
      $scope.placeCardCentrePile();
    }
  }

  $scope.dealCards = function () {
    //reset all cards

    $scope.playerCards = [{number: 6, suit: 'h'},{number: 3, suit: 's'}];
    $scope.cpuCards= [{number: 6, suit: 'h'},{number: 3, suit: 's'}];

    $scope.centrePileCards = [];

    ////var nrs = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    ////var suits = ['c', 'h', 's', 'd'];
    //var nrs = ['2', '3'];
    //var suits = ['c', 'h'];
    //
    //var i = 1;
    //
    //nrs.forEach(function (nr) {
    //
    //  suits.forEach(function (st) {
    //    if (i ==1) {
    //      $scope.playerCards.push({number: nr, suit: st})
    //    }
    //    else {
    //      $scope.cpuCards.push({number: nr, suit: st})
    //    }
    //  });
    //  i++;
    //});
    console.log('cpuCards.length',$scope.cpuCards.length);
    console.log('playerCards.length',$scope.playerCards.length);

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


  //playerTurn p (integer ) picks card from their pile and places it on centre pile
  //turns are switched with delay
  $scope.placeCardCentrePile = function () {
    //if player

    if (!$scope.playerTurn && $scope.playerCards.length > 0) {
      $scope.centrePileCards.unshift($scope.playerCards[0]);
      $scope.playerCards.splice(0, 1)
    }
    else {
      //cpu
      if ($scope.cpuCards.length > 0) {
        $scope.centrePileCards.unshift($scope.cpuCards[0]);
        $scope.cpuCards.splice(0, 1)
      }
    }


    // delay to see the card
    $timeout(function () {
      $scope.switchTurns();
    }, 1500);

  }

  //switch turns
  $scope.switchTurns = function () {
    $scope.playerTurn = !$scope.playerTurn;
    //when the player is cpu trigger a placeCardCentrePile
    if ($scope.playerTurn) {
      $scope.placeCardCentrePile();
      $timeout(function () {
        $scope.checkSnapTakeCentrePile();
        $scope.checkWinner();
      }, $scope.reactionTimeCpu);

    }
  }

  //check whether snap is true?
  $scope.checkSnapTakeCentrePile = function () {
    if ($scope.centrePileCards.length > 1 && $scope.centrePileCards[0].suit == $scope.centrePileCards[1].suit) {
      if ($scope.playerTurn) {
        $scope.cpuCards = _.union($scope.cpuCards, $scope.centrePileCards);
        $scope.winner = 'CPU calls snap';
      }
      else {
        $scope.playerCards = _.union($scope.playerCards, $scope.centrePileCards);
        $scope.winner = 'player calls snap';
      }
      $scope.snap = true;
      $scope.centrePileCards = [];
    }
  }

  $scope.checkWinner = function () {
    if ($scope.cpuCards.length == 0 && $scope.playerCards.length > 0) {
      $scope.winner = "player wins the game!!";
    }
    if ($scope.playerCards.length==0 && $scope.cpuCards.length >0 ) {
      $scope.winner = "CPU wins the game!!";
    }
  }



$scope.testGame = function () {
  $scope.playerCards=[{number: 6, suit: 'h'},{number: 6, suit: 's'}];
  $scope.cpuCards=[];
  $scope.playerTurn=0;
  $scope.checkWinner();
  var test = $scope.winner
  console.log(test);
  var b;
}

})
;
