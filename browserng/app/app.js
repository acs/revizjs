'use strict';

// Declare app level module which depends on views, and components

var myApp = angular.module('myApp', [
  'ngRoute',
  'myApp.version'
]);

myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
      when('/scm', {
          templateUrl: 'scm/overview.html',
          // controller: 'PhoneListCtrl'
      }).
      when('/scm/companies', {
          templateUrl: 'scm/companies/scm_companies.html',
          // controller: 'PhoneListCtrl'
      }).
      when('/scm/repos', {
          templateUrl: 'scm/repos/scm_repos.html',
          // controller: 'PhoneListCtrl'
    }).
    otherwise({redirectTo: '/scm'});
}]);
