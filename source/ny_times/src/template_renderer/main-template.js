(function () {
  

  var Template = function (opts) {
    var template = "" +
      "<div " +
      "class='ny-times-template' ng-controller='MainLibraryCtrl'>" +
        "<ny-times-feed></ny-times-feed>" +
      "</div>";
    return template;
  };

  define([], function () {
    
    return Template;
  });
}());