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


    NYTimes.Constants(module);
    NYTimes.Controllers(module);
    NYTimes.Directives(module);
    NYTimes.Filters(module);
    NYTimes.Services(module);
    NYTimes.Values(module);
    
    var element = NYTimes.document.querySelector(options.getMainElementSelector());
    var target = angular.element(element);



    //angular.bootstrap(element, [NYTimes.MODULE]);
    

    //get the api defined in the main_ctrl controller object.
    //var mainApi = angular.element(target[0].childNodes[0]).controller();
    return {};//mainApi;


    /*var nyTimesApi = {

      getApi: function getApi() {
        var mainApi = angular.element(target[0].childNodes[0]).controller().getApi();
        return mainApi;
      },

    };

    return nyTimesApi;
    */
  };

  define(
    [
      "angular",
      "./src/template-renderer",
      "./src/constants",
      "./src/controllers",
      "./src/directives",
      "./src/services",
      "./src/values",
      "./src/filters",
      "./src/controllers/main-ctrl"
    ],

    function (angular,
              TemplateRenderer,
              Constants,
              Controllers,
              Directives,
              Services,
              Values,
              Filters,
              MainCtrl) {

      NYTimes.MODULE = "NYTimesApp";
      NYTimes.MODULE_DEPENDENCIES = [];

      NYTimes.document = global.document;
      NYTimes.angular = angular;
      NYTimes.TemplateRenderer = TemplateRenderer;
      NYTimes.Constants = Constants;
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
