'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });

}])

.controller('View1Ctrl', ['$scope', '$http', function($scope, $http) {
      $http.put('http://localhost:8080/asap/a2000/12').
          success(function(data, status, headers, config) {
            // this callback will be called asynchronously
            // when the response is available
            $scope.data = data;
            console.log(data.name);
          }).
          error(function(data, status, headers, config) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
          });
}]);