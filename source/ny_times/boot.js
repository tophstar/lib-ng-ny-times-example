(function (global) {
  var NYTimes = function (options) {
    var angular = NYTimes.angular;

    NYTimes.TemplateRenderer(options);

    var module = angular.module(NYTimes.MODULE, NYTimes.MODULE_DEPENDENCIES);
    module.constant("$mainOptions", options);

    module.config([
      '$provide', function($provide) {
        return $provide.decorator('$rootScope', [
          '$delegate', function($delegate) {
            $delegate.safeApply = function (fn) {
              var phase = $delegate.$$phase;
              if (phase === "$apply" || phase === "$digest") {
                if (fn && typeof fn === 'function') {
                  fn();
                }
              } else {
                $delegate.$apply(fn);
              }
            };
            return $delegate;
          }
        ]);
      }
    ]);


    module.provider("$exceptionHandler", function () {
      return {
        $get: function () {
          return function (exception, cause) {
            try {
              if (typeof console !== "undefined") {
                if (console && console.log) {
                  console.log("[ERROR: angular.$exceptionHandler()]");
                  console.log("exception: ", exception);
                  console.log("exception.message: " + exception.message);
                  console.log("exception.stack: " + exception.stack);
                  console.log("cause: " + cause);
                  console.log("[ERROR: END]");
                }
              }
            } catch (e) {

            }
          };
        }
      };
    });


    NYTimes.Values(module);
    NYTimes.Services(module);
    NYTimes.Filters(module);
    NYTimes.Controllers(module);
    NYTimes.Directives(module);

    var element = NYTimes.document.querySelector(options.getNYTimesElementSelector());
    var target = angular.element(element);
    angular.bootstrap(target, [NYTimes.MODULE]);

    return NYTimes.MainCtrl.getApi();
  };

  define(
    [
      "angular",
      "./src/template_renderer",
      "./src/controllers",
      "./src/directives",
      "./src/services",
      "./src/values",
      "./src/filters",
      "./src/controllers/main_ctrl"
    ],

    function (angular,
              TemplateRenderer,
              Controllers,
              Directives,
              Services,
              Values,
              Filters,
              MainCtrl) {

      NYTimes.MODULE = "nytimes";

      NYTimes.document = global.document;
      NYTimes.angular = angular;
      NYTimes.TemplateRenderer = TemplateRenderer;
      NYTimes.Controllers = Controllers;
      NYTimes.Directives = Directives;
      NYTimes.Services = Services;
      NYTimes.Values = Values;
      NYTimes.Filters = Filters;
      NYTimes.MainCtrl = MainCtrl;

      return NYTimes;
    }
  );
}(window));
