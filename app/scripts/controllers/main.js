'use strict';

app.controller('MainCtrl', function ($scope) {

  ///start of game
  //
    $scope.dealCards= function(){
      $scope.playerCards=[];
      $scope.cpuCards=[];

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

      debugger;
    }


    $scope.playerTurn = Math.random() > 0.5 ? 1 : 0;

  });
