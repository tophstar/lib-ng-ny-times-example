(function () {
  var Controller = function ($scope) {
    $scope.showAllOptions = false;
    $scope.showDefaultOptions = true;

    $scope.showAllFilterOptions = function () {
      $scope.showAllOptions = true;
      $scope.showDefaultOptions = false;
    };

    $scope.showLessFilterOptions = function () {
      $scope.showAllOptions = false;
    };
  };

  define([], function () {
    Controller.$inject = ["$scope"];
    return Controller;
  });
}());