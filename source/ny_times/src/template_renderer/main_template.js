(function (opts) {
  

  var Template = function (options) {
    var template = "" +
      "<div class='"+opts.getMainElementSelector()+"-template'" +
        "ng-controller='MainCtrl' " +
      //ng-mouseenter='onMouseEnter()'" +
      //" ng-mouseleave='onMouseLeave()'" +
      //" ng-click='terminalClick($event)'>" +
      "</div>";
    return template;
  };

  define([], function () {
    
    return Template;
  });
}());