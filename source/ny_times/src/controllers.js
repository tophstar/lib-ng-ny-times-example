(function () {
  var Controllers = function (module) {
    Controllers.angular.forEach([Controllers.MainCTRL], function (Ctrl) {
      module.controller(Ctrl.NAME, Ctrl);
    });
  };

  define(["angular", "./controllers/main_ctrl"], function (angular, mainCTRL) {
    Controllers.MainCTRL = mainCTRL;
    Controllers.angular = angular;
    return Controllers;
  });
}());