(function () {
  var LoadMainApp = function () {
    var angular = LoadMainApp.angular;

      angular.module('WebsiteApp', [
        'WebsiteApp.controllers',
        'NYTimesApp',
        'ngAnimate', 
        'ui.bootstrap',
        //'infinite-scroll'
      ]);

      /*angular.module('WebsiteApp').controller('DropdownCtrl', function ($scope) {
        $scope.items = [
          'The first choice!',
          'And another choice for you.',
          'but wait! A third!'
        ];

        $scope.status = {
          isopen: false
        };

        $scope.toggled = function(open) {
          console.log('Dropdown is now: ', open);
        };

        $scope.toggleDropdown = function($event) {
          $event.preventDefault();
          $event.stopPropagation();
          $scope.status.isopen = !$scope.status.isopen;
        };
      });*/

    angular.module('WebsiteApp.controllers', []).
      controller('WebsiteCtrl', function ($scope){
        $scope.homeTitle = "TOPHSTAR.COM";

        $scope.showTerminalContainer = false;
        $scope.showNewYorkTimesContainer = true;


      }).
      controller('DropdownCtrl', function($scope, $log) {
        $scope.libraryExamples = ["Terminal", "NY Times"];

        $scope.status = {
          isopen: false
        };

        $scope.toggled = function(open) {
          console.log('Dropdown is now: ', open);
        };

        $scope.toggleDropdown = function($event) {
          $event.preventDefault();
          $event.stopPropagation();
          $scope.status.isopen = !$scope.status.isopen;
        };


      });


      angular.bootstrap(document, ['WebsiteApp']);
  };

  define("LoadMainApp", ["angular"], function (angular) {
    LoadMainApp.angular = angular;
    return LoadMainApp;
  });
}());
