(function () {
  

  var Template = function (opts) {
    var template = "" +
      "<div class='ny-times-template'" +
        "ng-controller='MainCtrl'>" +
      //ng-mouseenter='onMouseEnter()'" +
      //" ng-mouseleave='onMouseLeave()'" +
      //" ng-click='terminalClick($event)'>" +

        "HELLOOOOOOOOOOOOOOOOOOOOOOOO" +
      "</div>";
    return template;
  };

  define([], function () {
    
    return Template;
  });
}());