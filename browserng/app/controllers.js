'use strict';

var datasourceControllers = angular.module('datasourceControllers', []);

datasourceControllers.controller('DataSourceGlobalCtrl', ['$scope', '$routeParams',
  function ($scope) {
  }]);

datasourceControllers.controller('DataSourceOverviewCtrl', ['$scope', '$routeParams',
  function($scope, $routeParams) {
    $scope.datasourceId = $routeParams.datasourceId;
  }]);

datasourceControllers.controller('DataSourceFilterCtrl', ['$scope', '$routeParams',
  function($scope, $routeParams) {
    $scope.datasourceId = $routeParams.datasourceId;
    $scope.filterId = $routeParams.filterId;
  }]);