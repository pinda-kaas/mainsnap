/**
 * Created by Dimitri on 26/05/2015.
 */
app.controller('CpuCtrl', function ($scope, $state, $timeout, $stateParams) {


   // debugger;

    $scope.playerTurn=1;
    $scope.reactionTimeCpu=20000;

    var allCards = JSON.parse($stateParams.parms);

    $scope.placeCardCentrePile = function () {
      //debugger;
      if (allCards[1].length > 0) {
        allCards[2].unshift(allCards[1][0]);
        allCards[1].splice(0, 1)
        $scope.centrePileCards=allCards[2];
      }
    }

    $scope.checkWinner = function () {
      if (allCards[1].length == 0 && allCards[0].length==0) {
        $state.go('gameover', {winner: 'draw'});
      }

      if (allCards[1].length == 0 && allCards[0].length>0) {
        $state.go('gameover', {winner: 'player'});
      }

      if (allCards[1].length > 0 && allCards[0].length==0) {
        $state.go('gameover', {winner: 'cpu'});
      }

      $timeout(function(){
        $state.go('human', {cards: JSON.stringify(allCards)});
      },100);

    }

    function checkSnap()
    {
      if (allCards[2].length > 1 && allCards[2][0].suit == allCards[2][1].suit) {
        console.log('cpu calls snap');
        $state.go('snap',{player:'cpu'});
      }
    }


    $scope.placeCardCentrePile();

    $scope.checkWinner();

    var stuff= JSON.stringify(allCards);


    //with reactiontime delay check snap
    $timeout(function(){
      checkSnap();
    },2000)



    //$scope.checkSnap();



  }
)
;
