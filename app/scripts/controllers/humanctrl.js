/**
 * Created by Dimitri on 26/05/2015.
 */
app.controller('HumanCtrl', function ($scope, $state, $timeout, $stateParams) {

  console.log('start humanctrl');
  //debugger;

  var allCards = JSON.parse($stateParams.parms);

  $scope.centrePileCards = allCards[2];
  //testing only
  $scope.playerCards = allCards[0];
  $scope.cpuCards = allCards[1];

  $scope.playerTurn = 0;

  $scope.placeCardCentrePile = function () {
    // debugger;
    if (allCards[0].length > 0) {
      allCards[2].unshift(allCards[0][0]);
      allCards[0].splice(0, 1)
    }

    //go to cpu state
    $timeout(function () {
      $state.go('cpu', {parms: JSON.stringify(allCards)});
    }, 1000);

  }

  $scope.checkSnap=function()
  {
    if (allCards[2].length > 1 && allCards[2][0].suit == allCards[2][1].suit) {
      console.log('human calls snap');
      $state.go('snap',{cards:JSON.stringify(allCards)});
    }
  }



});
