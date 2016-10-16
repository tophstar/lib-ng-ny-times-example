(function (global) {
  var Options = function (opts) {
    var MainContainer,
        angular = Options.angular;

    var self = {

      getNYTimesApiKey: function getNYTimesApiKey () {
        return opts.NYTimesAPIKey;
      },

      getDefaultNYTimesQuery: function getDefaultNYTimesQuery() {
        return opts.NYTimesDefaultQuery;
      },

      getMainElementSelector: function getMainElementSelector() {
        return opts.target;
      },

      getOnErrorCallback: function getOnErrorCallback() {
        return opts.onError || null;
      },

      setOnError: function setOnError(onError) {
        if (angular.isFunction(onError)) {
          opts.onError = onError;
        }
      },

      getOnSetUpError: function getOnSetUpError() {
        return opts.onSetUpError || null;
      },

      setOnSetUpError: function setOnSetUpError(onSetUpError) {
        if (angular.isFunction(onSetUpError)) {
          opts.onSetUpError = onSetUpError;
        }
      },

      setMainContainer: function setMainContainer(container) {
        MainContainer = MainContainer;
      },

      getMainContainer: function getMainContainer() {
        return MainContainer;
      },

      toString: function toString() {
        return "[object Options]";
      }
    };

    return self;
  };

  define(["angular"], function (angular) {
    Options.angular = angular;
    return Options;
  });
}(window));
