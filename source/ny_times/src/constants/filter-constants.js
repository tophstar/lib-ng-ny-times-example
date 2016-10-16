(function () {

    var Filter = {};

    define([],
        function () {
            Filter.NAME = "FILTER_CONSTANTS";
            Filter.VALUES = {
                TURN_FILTER_ON: "ON",
                TURN_FILTER_OFF: "OFF",
                STORY_TEXT_EMPTY_FILTER_NAME: "applyEmptyStoryTextFilter",
                STORY_TEXT_CONTAINS_QUERY_NAME: "applyStoryTextContainsQueryFilter",
                STORY_BYLINE_CONTAINS_QUERY_NAME: "applyByLineContainsQueryFilter"
            };

            return Filter;
        });
}());