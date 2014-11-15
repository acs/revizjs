'use strict';

// Declare app level module which depends on views, and components

var dashApp = angular.module('dashApp', [
  'ngRoute',
  'datasourceControllers',
  'myApp.version'
]);

dashApp.config(['$routeProvider', function($routeProvider) {
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
