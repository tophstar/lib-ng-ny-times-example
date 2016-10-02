/* global addResizeListener, alert */
(function (global) {
  var TermCtrl = function ($scope, $mainOptions) {
    var angular = TermCtrl.angular,
      require = TermCtrl.require,
      mainContainer = $mainOptions.getMainContainer(),
      getResourceUrl = TermCtrl.getResourceUrl($scope);

    $scope.options = $mainOptions;
    $scope.mainContainer = mainContainer;

    $scope.baseUrl = require.toUrl("");

    function broadcast(event) {
        $scope.$broadcast("main_" + event);
    }

    var self = {

      getApi: function getApi() {
        return {
          onError: function onError(callback) { $mainOptions.setOnError(callback); },
        };
      }
    };

    return self;
  };

  define([
    "angular"
  ], function (angular) {

    TermCtrl.require = global.require;
    TermCtrl.angular = angular;
    TermCtrl.NAME = "MainCtrl";
    TermCtrl.$inject = ["$scope", "$mainOptions"];
    return TermCtrl;
  });
}(window));
