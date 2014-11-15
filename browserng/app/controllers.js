'use strict';

var datasourceControllers = angular.module('datasourceControllers', []);

datasourceControllers.redraw = function(){
    Report.convertGlobal();
    Report.convertStudiesGlobal();
    Report.convertStudies();
    Convert.activateHelp();
};

datasourceControllers.controller('DataSourceGlobalCtrl', ['$scope', '$routeParams',
  function ($scope) {
    datasourceControllers.redraw();
}]);

datasourceControllers.controller('DataSourceOverviewCtrl', ['$scope', '$routeParams',
  function($scope, $routeParams) {
    $scope.datasourceId = $routeParams.datasourceId;
    datasourceControllers.redraw();
  }]);

datasourceControllers.controller('DataSourceFilterCtrl', ['$scope', '$routeParams',
  function($scope, $routeParams) {
    $scope.datasourceId = $routeParams.datasourceId;
    $scope.filterId = $routeParams.filterId;
    datasourceControllers.redraw();
  }]);