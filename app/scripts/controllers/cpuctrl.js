/**
 * Created by Dimitri on 26/05/2015.
 */
app.controller('CpuCtrl', function ($scope, $state, $timeout,$stateParams) {

    console.log('start cpuctrl');

    var allCards = JSON.parse($stateParams.parms);

    debugger;

    $scope.placeCardCentrePile = function () {
      if (allCards[1].length > 0) {
        $scope.centrePileCards.unshift($scope.cpuCards[0]);
        $scope.cpuCards.splice(0, 1)
      }
    }

    $scope.checkWinner = function () {
      if ($scope.cpuCards.length == 0 )
      {
        $state.go('gameover',{ winner: 'cpu' });
      }

      if ($scope.playerCards.length == 0 )
      {
        $state.go('gameover',{ winner: 'human' });
      }
    }


    $scope.placeCardCentrePile();

    localStorage.setItem('playerCards', JSON.stringify($scope.playerCards));
    localStorage.setItem('cpuCards', JSON.stringify($scope.cpuCards));
    localStorage.setItem('centrePileCards', JSON.stringify($scope.centrePileCards));

    $scope.checkWinner();

    //check for snap
    if ($scope.centrePileCards.length > 1 && $scope.centrePileCards[0].suit == $scope.centrePileCards[1].suit) {
      //call snap
      debugger;
      $timeout(function () {
        $state.go('snap', {player: 'cpu'});
      }, $scope.reactionTimeCpu);
    }


  }
)
;
