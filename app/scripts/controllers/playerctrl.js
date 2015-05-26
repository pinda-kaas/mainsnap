/**
 * Created by Dimitri on 26/05/2015.
 */
app.controller('PlayerCtrl', function ($scope) {
  console.log('start playerctrl');
  debugger;
  $scope.playerCards = JSON.parse(localStorage.getItem('playerCards'));
  $scope.cpuCards = JSON.parse(localStorage.getItem('cpuCards'));
  $scope.centrePileCards = JSON.parse(localStorage.getItem('centrePileCards'));

  $scope.placeCardCentrePile = function () {
    if ($scope.playerCards.length > 0) {
      debugger;
      $scope.centrePileCards.unshift($scope.playerCards[0]);
      $scope.playerCards.splice(0, 1)
    }
  }

  $scope.placeCardCentrePile();

});
