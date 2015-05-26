/**
 * Created by Dimitri on 26/05/2015.
 */
app.controller('CpuCtrl', function ($scope, $state, $timeout, $stateParams) {

    console.log('start cpuctrl');

    $scope.playerTurn=1;

    var allCards = JSON.parse($stateParams.parms);

    $scope.placeCardCentrePile = function () {
      if (allCards[1].length > 0) {
        allCards[2].unshift(allCards[1][0]);
        allCards[1].splice(0, 1)
      }
    }

    $scope.checkWinner = function () {
      if (allCards[1].length == 0) {
        $state.go('gameover', {winner: 'human'});
      }

      if (allCards[0].length == 0) {
        $state.go('gameover', {winner: 'cpu'});
      }
    }

    $scope.checkSnap = function () {
      //if (allCards[1].length > 1 && allCards[1][0].suit == allCards[1][1].suit) {
      //  $timeout(function () {
      //    $state.go('snap', {player: 'cpu'});
      //  }, $scope.reactionTimeCpu);
      //}
    }

    $scope.placeCardCentrePile();

    $scope.checkWinner();

    $scope.checkSnap();

    //$state.go('human',{parms:JSON.stringify(allCards)})
  }
)
;
