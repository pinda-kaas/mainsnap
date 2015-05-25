'use strict';

app.controller('MainCtrl', function ($scope,$timeout,_) {

  $scope.playerCards = [];
  $scope.cpuCards = [];
  $scope.centrePileCards = [];
  $scope.playerTurn = null;
  $scope.snap=false;
  $scope.reactionTimeCpu=0;

  ///start of game
  //
  $scope.startGame= function(){
    $scope.snap=false;
    //choose random player
    $scope.playerTurn = Math.random() > 0.5 ? 1 : 0;
    $scope.dealCards();
  }

  $scope.dealCards = function () {

    //reset all cards
    $scope.playerCards = [];
    $scope.cpuCards = [];
    $scope.centrePileCards = [];

    var nrs = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    var suits = ['c', 'h','s','d'];

    var i=1;

    $scope.shuffle(nrs).forEach(function (nr) {
      $scope.shuffle(suits).forEach(function (st) {
        if (i<27) {
          $scope.playerCards.push({number: nr, suit: st})
        }
        else
        {
          $scope.cpuCards.push({number: nr, suit: st})
        }
        i++;
      });
    });

     //when the player is cpu trigger a pickcard
    if ($scope.playerTurn) {
      $scope.pickCard();
    }

  }

  //shuffle the cards
  $scope.shuffle = function(array) {
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
  $scope.pickCard = function() {
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

  //2 sec delay to see the card
    $timeout(function(){
      $scope.switchTurns();
    },2000);

  }

  //switch turns
  $scope.switchTurns = function () {

    $scope.playerTurn = !$scope.playerTurn;
    //when the player is cpu trigger a pickcard
   if ($scope.playerTurn)
   {
      $scope.pickCard();
     $timeout(function(){
       $scope.hitCentrePile();
     },$scope.reactionTimeCpu);

   }
  }

  //check whether snap is true?
  $scope.hitCentrePile = function(){
    //debugger;
    if ($scope.centrePileCards.length > 0) {
      if ($scope.centrePileCards[0].suit == $scope.centrePileCards[1].suit) {
        $scope.snap = true;
        if ($scope.playerTurn)
        {
          debugger;
          $scope.cpuCards=_.union($scope.cpuCards,$scope.centrePileCards);
          $scope.winner='CPU calls snap';
        }
        else
        {

          $scope.playerCards=_.union($scope.playerCards,$scope.centrePileCards);
          $scope.winner='player calls snap';
        }
        $scope.centrePileCards=[];
      }
    }
  }

  $scope.SnapTest= function(){
    $scope.centrePileCards = [{number: 6, suit: 'h'},{number: 3, suit: 'h'}];
    $scope.playerTurn=1;
    $scope.reactionTimeCpu=10;
    $scope.hitCentrePile();
  }


});
