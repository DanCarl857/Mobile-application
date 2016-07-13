'use strict';
/*global $ */

angular.module('mobileMoneyApp')
  .controller('mainCtrl', ['$scope', 'dataService', 'AuthenticationService', '$rootScope', function ($scope, dataService, AuthenticationService) {

      $scope.clients; 
      $scope.status = null;
      var basicKey = '';

      // basicKey = AuthenticationService.SetBasicAuthKey('mifos', 'password');
      console.log("Basic Key: " + basicKey);

      $scope.getClients = function(){
        dataService.getAllClients()
          .then(function(response){
            console.log(response.data);
            $scope.clients = response.data;
          }, function(error){
            $scope.status = "Unable to load client data: " + error.message;
            console.log($scope.status);
          })
      };

      $scope.getClients();
  }]);
