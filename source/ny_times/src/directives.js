(function (global) {
  var Directives = function (module) {
    global.angular.forEach(Directives.list, function (directive) {
      module.directive(directive['NAME'], directive);
    });
  };

  define([
    "./directives/ny_times_feed"
  ], function (
    NYTimesFeed
    ) {
    Directives.list = arguments;
    return Directives;
  });
}(window));