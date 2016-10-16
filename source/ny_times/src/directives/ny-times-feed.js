(function () {
    var NYTimesFeed = function () {
        return {
            restrict: "E",
            replace: true,
            controller: NYTimesFeed.Controller,
            link: NYTimesFeed.Link,
            template: NYTimesFeed.Template
        };
    };

    define([
        "./ny_times_feed/controller",
        "./ny_times_feed/link",
        "./ny_times_feed/template"
    ], function (Controller, Link, Template) {
        NYTimesFeed.Controller = Controller;
        NYTimesFeed.Link = Link;
        NYTimesFeed.Template = Template;
        NYTimesFeed.NAME = "nyTimesFeed";
        return NYTimesFeed;
    });
}());