(function () {
    var NYTimesStory = function () {
        return {
            restrict: "E",
            replace: true,
            scope:{
                story: '=',
                index: '@',
                page: '@',
                storyHasActiveFilter: '&',
                applyTypeOfMaterialFilter: '=',
                applyNewsDeskFilter:'=',
                applyEmptyStoryTextFilter: '=',
                applyStoryTextContainsQueryFilter: '=',
                applyByLineContainsQueryFilter: '='
            },
            controller: NYTimesStory.Controller,
            link: NYTimesStory.Link,
            template: NYTimesStory.Template
        };
    };

    define([
        "./ny_times_story/controller",
        "./ny_times_story/link",
        "./ny_times_story/template"
    ], function (
        Controller,
        Link,
        Template) {
        NYTimesStory.Controller = Controller;
        NYTimesStory.Link = Link;
        NYTimesStory.Template = Template;
        NYTimesStory.NAME = "nyTimesStory";
        return NYTimesStory;
    });
}());