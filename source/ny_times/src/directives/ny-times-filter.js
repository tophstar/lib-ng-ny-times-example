(function () {
    var NYTimesFilter = function () {
        return {
            restrict: "E",
            replace: true,
            /*scope:{
                typeOfMaterialOptions: '=',
            },*/
            controller: NYTimesFilter.Controller,
            //link: NYTimesFilter.Link,
            template: NYTimesFilter.Template
        };
    };

    define([
        "./ny_times_filter/controller",
        //"./ny_times_filter/link",
        "./ny_times_filter/template"
    ], function (
        Controller,
        //Link,
        Template) {
        NYTimesFilter.Controller = Controller;
        //NYTimesFilter.Link = Link;
        NYTimesFilter.Template = Template;
        NYTimesFilter.NAME = "nyTimesFilter";
        return NYTimesFilter;
    });
}());