/**
 * Created by Dimitri on 26/05/2015.
 */
app.controller('HumanCtrl', function ($scope,$state,$timeout,$stateParams) {

  console.log('start humanctrl');

  var allCards = JSON.parse($stateParams.parms);

  $scope.playerTurn=0;

  $scope.placeCardCentrePile = function () {
    if (allCards[0].length > 0) {
      allCards[2].unshift(allCards[0][0]);
      allCards[0].splice(0, 1)
    }

    //go to cpu state
    $timeout(function(){$state.go('cpu');},1000);

  }

  $scope.checkSnap=function() {
    console.log('allCards[2]:',allCards[2]);
    if ($scope.allCards[2].length > 1 && $scope.allCards[2][0].suit == $scope.allCards[2][1].suit) {
    //call snap
    $state.go('snap', {player: 'human'});
  }
  }
  $scope.placeCardCentrePile();

  $scope.checkSnap();

  });
