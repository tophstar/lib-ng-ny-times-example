(function () {
  function defaultErrorCallback(message) {
    throw new Error(message);
  }


  var Services = function (module) {
    var angular = Services.angular;

    module.factory("$cbtErrors", ["$cbtOptions", function ($cbtOptions) {
      var onErrorCallback = $cbtOptions.getOnErrorCallback();
      onErrorCallback = (angular.isFunction(onErrorCallback)) ? onErrorCallback : defaultErrorCallback;

      function errorCallback(code, msg) {
        var info = "[Error " + code + "] " + msg;
        onErrorCallback(info, code);
      }

      var self = {
      };

      return self;
    }]);
  };

  define(["angular"], function (angular) {
    Services.angular = angular;
    return Services;
  });
}());