'use strict';

/**
 * @ngdoc function
 * @name kitApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the kitApp
 */
app.controller('MainCtrl', function ($scope) {

    $scope.dealCards= function(){

      $scope.playerCards=[{"nr":1,suit:'h'},{"nr":1,suit:'h'},{"nr":1,suit:'h'},{"nr":1,suit:'h'},{"nr":1,suit:'h'},{"nr":1,suit:'h'},{"nr":1,suit:'h'},{"nr":1,suit:'h'},{"nr":1,suit:'h'},{"nr":1,suit:'h'},{"nr":1,suit:'h'},{"nr":1,suit:'h'},{"nr":1,suit:'h'},
        {"nr":1,suit:'h'},{"nr":1,suit:'h'},{"nr":1,suit:'h'},{"nr":1,suit:'h'},{"nr":1,suit:'h'},{"nr":1,suit:'h'},{"nr":1,suit:'h'},{"nr":1,suit:'h'},{"nr":1,suit:'h'},{"nr":1,suit:'h'},{"nr":1,suit:'h'},{"nr":1,suit:'h'},{"nr":1,suit:'h'}
      ];
      $scope.cpuCards=[{"nr":1,suit:'h'},{"nr":1,suit:'h'},{"nr":1,suit:'h'},{"nr":1,suit:'h'},{"nr":1,suit:'h'},{"nr":1,suit:'h'},{"nr":1,suit:'h'},{"nr":1,suit:'h'},{"nr":1,suit:'h'},{"nr":1,suit:'h'},{"nr":1,suit:'h'},{"nr":1,suit:'h'},{"nr":1,suit:'h'},
        {"nr":1,suit:'h'},{"nr":1,suit:'h'},{"nr":1,suit:'h'},{"nr":1,suit:'h'},{"nr":1,suit:'h'},{"nr":1,suit:'h'},{"nr":1,suit:'h'},{"nr":1,suit:'h'},{"nr":1,suit:'h'},{"nr":1,suit:'h'},{"nr":1,suit:'h'},{"nr":1,suit:'h'},{"nr":1,suit:'h'}
      ];

    }
  });
