'use strict';

var datasourceControllers = angular.module('datasourceControllers', []);

function redraw(){
    Report.convertGlobal();
    Report.convertStudiesGlobal();
    Report.convertStudies();
    Convert.activateHelp();
}

datasourceControllers.controller('DataSourceGlobalCtrl', ['$scope', '$routeParams',
  function ($scope) {
    redraw();
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