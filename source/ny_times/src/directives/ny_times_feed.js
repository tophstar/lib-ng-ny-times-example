(function () {
    var ScrubberTooltip = function () {
        return {
            restrict: "E",
            replace: true,
            link: ScrubberTooltip.Link,
            template: ScrubberTooltip.Template
        };
    };

    define([
        "./ny-times-feed/link",
        "./ny-times-feed/template"
    ], function (Link, Template) {
        ScrubberTooltip.Link = Link;
        ScrubberTooltip.Template = Template;
        ScrubberTooltip.NAME = "nyTimesFeed";
        return ScrubberTooltip;
    });
}());