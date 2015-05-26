/**
 * Created by Dimitri on 26/05/2015.
 */
app.controller('HumanCtrl', function ($scope,$state,$timeout,$stateParams) {

  console.log('start humanctrl');

  $scope.playerCards = JSON.parse(localStorage.getItem('playerCards'));
  $scope.cpuCards = JSON.parse(localStorage.getItem('cpuCards'));
  $scope.centrePileCards = JSON.parse(localStorage.getItem('centrePileCards'));

  $scope.placeCardCentrePile = function () {
    if ($scope.playerCards.length > 0) {
      $scope.centrePileCards.unshift($scope.playerCards[0]);
      $scope.playerCards.splice(0, 1)
    }
  }

  $scope.checkSnap=function() {
    console.log('centrepilecards:',$scope.centrePileCards);
    //if ($scope.centrePileCards.length > 1 && $scope.centrePileCards[0].suit == $scope.centrePileCards[1].suit) {
    //call snap
    $state.go('snap', {player: 'human'});
  //}
  }

  $scope.placeCardCentrePile();

  $scope.checkSnap();

  localStorage.setItem('playerCards',JSON.stringify($scope.playerCards));
  localStorage.setItem('cpuCards',JSON.stringify($scope.cpuCards));
  localStorage.setItem('centrePileCards',JSON.stringify($scope.centrePileCards));

  //go to cpu state
  $timeout(function(){
    $state.go('cpu');
  },1000);

});
