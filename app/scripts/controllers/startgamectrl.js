'use strict';

app.controller('StartGameCtrl', function ($scope, $timeout, $state) {

  $scope.playerCards = [];
  $scope.cpuCards = [];
  $scope.centrePileCards = [];
  $scope.playerTurn = null;
  $scope.snap = false;
  $scope.reactionTimeCpu = 20000;

  console.log('start mainctrl');

  $scope.startGame = function (p) {

    $scope.snap = false;

    //$scope.dealCards(['2','3','4','5','6','7','8','9','10','J','Q','K','A'],['s','h','d','c']);
    $scope.dealCards(['2','3'],['s','h']);

    if (p) {debugger;
      $state.go('cpu')
    } else {
      $state.go('human');
    }
  }

  $scope.dealCards = function (nrs,suits) {
    var cards=[];

    $scope.centrePileCards = [];

    localStorage.setItem('playerCards', JSON.stringify($scope.playerCards));
    localStorage.setItem('cpuCards', JSON.stringify($scope.cpuCards));
    localStorage.setItem('centrePileCards', JSON.stringify($scope.centrePileCards));

    nrs.forEach(function (nr) {
      suits.forEach(function (st) {
        cards.push({number: nr, suit: st})
      });
    });

    //shuffle the cards
    var shuf = $scope.shuffle(cards);

    console.log(shuf,'shuffled cards');


    //divide into player and cpu cards
    $scope.playerCards = shuf.slice(0,shuf.length/2);
    console.log(shuf.length, 's length');
    console.log(cards.length, 'c length');

    $scope.cpuCards = shuf.slice(shuf.length/2,shuf.length);

    console.log('cpuCards.length',$scope.cpuCards.length);
    console.log('playerCards.length',$scope.playerCards.length);

    localStorage.setItem('playerCards', JSON.stringify($scope.playerCards));
    localStorage.setItem('cpuCards', JSON.stringify($scope.cpuCards));
    localStorage.setItem('centrePileCards', JSON.stringify($scope.centrePileCards));



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

//
//  //playerTurn p (integer ) picks card from their pile and places it on centre pile
//  //turns are switched with delay
//  $scope.placeCardCentrePile = function () {
//    //if player
//
//    if (!$scope.playerTurn && $scope.playerCards.length > 0) {
//      $scope.centrePileCards.unshift($scope.playerCards[0]);
//      $scope.playerCards.splice(0, 1)
//    }
//    else {
//      //cpu
//      if ($scope.cpuCards.length > 0) {
//        $scope.centrePileCards.unshift($scope.cpuCards[0]);
//        $scope.cpuCards.splice(0, 1)
//      }
//    }
//
//    console.log('starting at switch turns , player=',$scope.playerTurn);
//    // delay to see the card
//    $timeout(function () {
//      $scope.switchTurns();
//    }, 1000);
//
//
//  }
//
//  //switch turns
//  $scope.switchTurns = function () {
//    console.log('arriving at switch turns player = ',$scope.playerTurn);
//    $scope.playerTurn = !$scope.playerTurn;
//    //when the player is cpu trigger a placeCardCentrePile
//    //if ($scope.playerTurn) {
//    //  $scope.placeCardCentrePile();
//    //
//    //  $timeout(function () {
//    //    $scope.checkSnapTakeCentrePile();
//    //  }, $scope.reactionTimeCpu);
//    //}
//  }
//
//  //check whether snap is true?
//  $scope.checkSnapTakeCentrePile = function () {
//    //debugger;
//    console.log('arriving at checkSnapTakeCentrePile player=',$scope.playerTurn);
//    if ($scope.centrePileCards.length > 1 && $scope.centrePileCards[0].suit == $scope.centrePileCards[1].suit) {
//      if ($scope.playerTurn) {
//        $scope.cpuCards = _.union($scope.cpuCards, $scope.centrePileCards);
//        $scope.winner = 'CPU calls snap';
//      }
//      else {
//        $scope.playerCards = _.union($scope.playerCards, $scope.centrePileCards);
//        $scope.winner = 'player calls snap';
//      }
//      $scope.snap = true;
//      $scope.centrePileCards = [];
//    }
//
//    $scope.checkWinner();
//  }
//
//  $scope.checkWinner = function () {
//    if ($scope.cpuCards.length == 0 && $scope.playerCards.length > 0) {
//      $scope.winner = "player wins the game!!";
//    }
//    if ($scope.playerCards.length==0 && $scope.cpuCards.length >0 ) {
//      $scope.winner = "CPU wins the game!!";
//    }
//  }
//
//
//
//$scope.testGame = function () {
//  $scope.centrePileCards =[{number: 6, suit: 'h'},{number: 3, suit: 'h'}];
//  $scope.cpuCards=[];
//  $scope.playerCards=[];
//  $scope.playerTurn=1;
//  $scope.checkSnapTakeCentrePile()
//
//}

})
;
