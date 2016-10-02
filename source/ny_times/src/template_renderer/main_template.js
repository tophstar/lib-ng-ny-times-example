(function () {
  

  var Template = function (opts) {
    var template = "" +
      "<div class='ny-times-template'" +
        "ng-controller='MainCtrl'>" +
      //ng-mouseenter='onMouseEnter()'" +
      //" ng-mouseleave='onMouseLeave()'" +
      //" ng-click='terminalClick($event)'>" +

        "<ny-times-feed></ny-times-feed>" +
      "</div>";
    return template;
  };

  define([], function () {
    
    return Template;
  });
}());