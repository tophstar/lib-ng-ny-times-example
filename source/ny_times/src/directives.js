(function (global) {
  var Directives = function (module) {
    global.angular.forEach(Directives.list, function (directive) {
      module.directive(directive['NAME'], directive);
    });
  };

  define([
    "./directives/infinite-scroller",
    "./directives/ny-times-feed",
    "./directives/ny-times-filter-type-option.js",
    "./directives/ny-times-filter-type",
    "./directives/ny-times-filter",
    "./directives/ny-times-sidebar",
    "./directives/ny-times-story"
  ], function (
    InfiniteScroller,
    NYTimesFeed,
    NYTimesFilterTypeOption,
    NYTimesFilterType,
    NYTimesFilter,
    NYTimesSidebar,
    NYTimesStory
    ) {
    Directives.list = arguments;
    return Directives;
  });
}(window));