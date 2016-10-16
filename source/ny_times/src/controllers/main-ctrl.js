(function () {
  var MainCtrl = function ($scope, $mainOptions) {
    var angular = MainCtrl.angular,
      mainContainer = $mainOptions.getMainContainer();

    $scope.options = $mainOptions;
    $scope.mainContainer = mainContainer;

    var self = {
        onError: function onError(callback) { $mainOptions.setOnError(callback); }
    };

    return self;
  };

  define([
    "angular"
  ], function (angular) {
    MainCtrl.angular = angular;
    MainCtrl.NAME = "MainLibraryCtrl";
    MainCtrl.$inject = ["$scope", "$mainOptions"];
    return MainCtrl;
  });
}());