(function () {
    var NYTimesSidebar = function () {
        return {
            restrict: "E",
            replace: true,
//            controller: NYTimesSidebar.Controller,
//            link: NYTimesSidebar.Link,
            template: NYTimesSidebar.Template
        };
    };

    define([
//        "./ny_times_sidebar/controller",
//        "./ny_times_sidebar/link",
        "./ny_times_sidebar/template"
    ], function (
//        Controller, 
//        Link, 
        Template
    ) {
//        NYTimesSidebar.Controller = Controller;
//        NYTimesSidebar.Link = Link;
        NYTimesSidebar.Template = Template;
        NYTimesSidebar.NAME = "nyTimesSidebar";
        return NYTimesSidebar;
    });
}());