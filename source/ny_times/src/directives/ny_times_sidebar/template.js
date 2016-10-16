(function () {
	define([], function () {
        return "" +
		"<div class='hidden-xs col-sm-2 ny-times-side-control sidebar'>" +
			"<ul class='sidebar-navs'>" +
				"<li ng-class='nyTimesStoryFeedNavClass' class='sidebar-nav-option' ng-click='showNYTimesContainerClick(\"nyTimesStoryFeed\")'>" +
					"<h3 class='hidden-sm'>Story Feed</h3>" +
					"<span class='visible-sm'>Story Feed</span>" +
				"</li>" +
				"<li ng-class='nyTimesStoryFilterNavClass' class='sidebar-nav-option' ng-click='showNYTimesContainerClick(\"nyTimesFilterContainer\")'>" +
					"<h3 class='hidden-sm'>Filter</h3>" +
					"<div class='visible-sm'>Filter</div>" +
				"</li>" +
			"</ul>" +
		"</div>";
	});
}());