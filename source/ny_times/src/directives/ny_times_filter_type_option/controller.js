(function () {
  var Controller = function ($scope) {
    $scope.filterOptionName = Object.keys($scope.filterOption)[0];
    $scope.filterOn = $scope.filterOption[$scope.filterOptionName];

    $scope.clickFilterOptionCheckbox = function () {
        $scope.filterOption[$scope.filterOptionName] = !$scope.filterOption[$scope.filterOptionName];
        $scope.filterOn = $scope.filterOption[$scope.filterOptionName];

//        $scope.safeApply();
        $scope.$emit('filterChange');
    };


  };

  define([], function () {
    Controller.$inject = ["$scope"];
    return Controller;
  });
}());