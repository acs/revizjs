'use strict';

// Declare app level module which depends on views, and components

var myApp = angular.module('myApp', [
  'ngRoute',
  'datasourceControllers',
  'myApp.version'
]);

myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
      when('/ds', {
          templateUrl: 'ds/global.html',
          controller: 'DataSourceGlobalCtrl'
      }).
      when('/ds/:datasourceId', {
          templateUrl: 'ds/overview.html',
          controller: 'DataSourceOverviewCtrl'
      }).
      when('/ds/:datasourceId/:filterId', {
          templateUrl: 'ds/filter.html',
          controller: 'DataSourceFilterCtrl'
      }).
      otherwise({redirectTo: '/ds'});
}]);
