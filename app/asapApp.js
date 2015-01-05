'use strict';

// Declare app level module which depends on views, and components
var asapApp = angular.module('asapApp', [
    'ngRoute',
    'asapApp.a2000'
])

    .config(['$routeProvider', function($routeProvider) {

        $routeProvider.otherwise({redirectTo: '/a2000'});
    }]);
/*
.config(['$routeProvider', function($routeProvider) {
    $routeProvider.otherwise('/a2000', {
        templateUrl: 'a2000/a2000.html',
        controller: 'a2000'

    });
}]);
    */