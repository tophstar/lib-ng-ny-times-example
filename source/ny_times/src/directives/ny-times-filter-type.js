(function () {
    var NYTimesFilterType = function () {
        return {
            restrict: "E",
            replace: true,
            scope:{
                filterOptions: '=',
                filterType: '@'
            },
            controller: NYTimesFilterType.Controller,
            //link: NYTimesFilterType.Link,
            template: NYTimesFilterType.Template
        };
    };

    define([
        "./ny_times_filter_type/controller",
        //"./ny_times_filter_type/link",
        "./ny_times_filter_type/template"
    ], function (
        Controller,
        //Link,
        Template) {
        NYTimesFilterType.Controller = Controller;
        //NYTimesFilter.Link = Link;
        NYTimesFilterType.Template = Template;
        NYTimesFilterType.NAME = "nyTimesFilterType";
        return NYTimesFilterType;
    });
}());