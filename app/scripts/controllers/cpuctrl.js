/**
 * Created by Dimitri on 26/05/2015.
 */
app.controller('CpuCtrl',function($scope){

  console.log('start cpuctrl');

  $scope.playerCards = JSON.parse(localStorage.getItem('playerCards'));
  $scope.cpuCards = JSON.parse(localStorage.getItem('cpuCards'));
  $scope.centrePileCards = JSON.parse(localStorage.getItem('centrePileCards'));

  $scope.placeCardCentrePile = function () {
      if ($scope.cpuCards.length > 0) {
        $scope.centrePileCards.unshift($scope.cpuCards[0]);
        $scope.cpuCards.splice(0, 1)
      }
    }

  $scope.placeCardCentrePile();

  localStorage.setItem('playerCards',JSON.stringify($scope.playerCards));
  localStorage.setItem('cpuCards',JSON.stringify($scope.cpuCards));
  localStorage.setItem('centrePileCards',JSON.stringify($scope.centrePileCards));

});
