/* global alert */
(function (global) {
  var device, onSetUpError, angular, mainTargetSelector, mainTarget;
  var TemplateRenderer = function (options) {
    angular = TemplateRenderer.angular;
    device = TemplateRenderer.device;
    onSetUpError = options.getOnSetUpError();

    function setUpError(fallback, message) {
      if (angular.isFunction(onSetUpError)) {
        onSetUpError(fallback, message);
      } else {
        throw new Error(message);
      }
    }

    mainTargetSelector = options.getMainElementSelector();
    mainTarget = TemplateRenderer.document.querySelector(mainTargetSelector);

    if (mainTarget) {
      options.setMainContainer(mainTarget);
      var template = TemplateRenderer.getMainTemplateMarkup(options);
      angular.element(mainTarget).html(template);
    } else {
      setUpError(false, "No target found. Please set the target property to a valid DOM element selector.");
    }
  };

  function getMainTemplateMarkup(options) {

    //Select template based on options
    var template = TemplateRenderer.DESKTOP_TEMPLATE(options);

    return template;
  }

  define(
      [
          "angular",
          "./template_renderer/main-template"
      ],
      function (
          angular,
          MainTemplate) {

          TemplateRenderer.DESKTOP_TEMPLATE       = MainTemplate;

          TemplateRenderer.angular = angular;
          TemplateRenderer.document = global.document;

          TemplateRenderer.getMainTemplateMarkup = getMainTemplateMarkup;

          return TemplateRenderer;
      }
  );
}(window));