'use strict';

angular.module('asapApp.a2000', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
       // $routeProvider.when('/view1', {
       //     templateUrl: 'view1/view1.html',
       //     controller: 'View1Ctrl'
       // });

    }])

    .controller('a2000', ['$scope', '$http', function($scope, $http) {

        $http.put('http://localhost:8080/asap/a2000/12').
            success(function(data, status, headers, config) {
                // this callback will be called asynchronously when the response is available

                $scope.data = data;
                //$scope.data = angular.fromJson(data);
               /*
                $scope.select_voltage =  "";
                $scope.select_mounting = "";
                $scope.select_relayVoltage =  "";
                $scope.select_feederType = "";
                $scope.select_breakerSize = "";
                */
               // console.log(data.voltage["120/240 Single Phase"].displayName);

            }).
            error(function(data, status, headers, config) {
                console.log(status);
                // called asynchronously if an error occurs
                // or server returns response with an error status.
            });

        $scope.submitAll = function(dataObj, dataSelect) {
            angular.forEach(dataObj, function(value,key) {
                value.selected = false;
                });
                dataObj[dataSelect].selected = true;
                //$scope.data.voltage[$scope.select_voltage].selected = true;
                console.log(dataSelect);
            /*
             $http.put('http://localhost:8080/asap/a2000/12').
             success(function(data, status, headers, config) {
             $scope.data = data;
             }).
             error(function(data, status, headers, config) {
             console.log(status);
             });
             */
        }
        $scope.submitSingleValue = function() {
            console.log($scope.data.relayQuantity);
        }
    }]);