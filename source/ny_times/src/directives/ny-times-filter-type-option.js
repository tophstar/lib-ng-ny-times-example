(function () {
    var NYTimesFilterTypeOption = function () {
        return {
            restrict: "E",
            replace: true,
            scope:{
                showAllOptions: '=',
                filterOption: '='
            },
            controller:NYTimesFilterTypeOption.Controller,
            //link: NYTimesFilterTypeOption.Link,
            template: NYTimesFilterTypeOption.Template
        };
    };

    define([
        "./ny_times_filter_type_option/controller",
        //"./ny_times_filter_type_option/link",
        "./ny_times_filter_type_option/template"
    ], function (
        Controller,
        //Link,
        Template) {
        NYTimesFilterTypeOption.Controller = Controller;
        //NYTimesFilterTypeOption.Link = Link;
        NYTimesFilterTypeOption.Template = Template;
        NYTimesFilterTypeOption.NAME = "nyTimesFilterTypeOption";
        return NYTimesFilterTypeOption;
    });
}());