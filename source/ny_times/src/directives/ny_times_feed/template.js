(function () {
	define([], function () {
        return "" +
			"<div>" +
				"<div class='row'>" +

					"<ny-times-sidebar></ny-times-sidebar>" +

					"<div class='hidden-sm hidden-md hidden-lg ny-times-side-control-xs'>" +
						"<div ng-click='showNYTimesContainerClick(\"nyTimesStoryFeed\")' " +
						"ng-class='nyTimesStoryFeedNavClass' class='col-xs-6 sidebar-nav-option'>" +
							"<h3>Story Feed</h3>" +
						"</div>" +
						"<div ng-class='nyTimesStoryFilterNavClass' class='col-xs-6 sidebar-nav-option' " +
						"ng-click='showNYTimesContainerClick(\"nyTimesFilterContainer\")'>" +
							"<h3>Filter</h3>" +
						"</div>" +
					"</div>" +

					"<div class='col-xs-12 col-sm-offset-2 col-sm-10 ny-times-filter-container main' ng-show='showNYTimesFilterContainer'>" +
						"<ny-times-filter typeOfMaterialOptions='typeOfMaterials' " +
							"apply-empty-story-text-filter='applyEmptyStoryTextFilter' " +
							"apply-story-text-contains-query-filter='applyStoryTextContainsQueryFilter' " +
							"apply-by-line-contains-query-filter='applyByLineContainsQueryFilter'>" +
						"</ny-times-filter>" +
					"</div>" +

					"<div infinite-scroll='scrollingFunction()' infinite-scroll-distance='1' infinite-scroll-disabled=''" +
						"class='col-xs-12 col-sm-offset-2 col-sm-10 ny-times-story-container main' " +
						"ng-show='showNYTimesStoryFeedContainer'>" +
						"<div class='ny-times-news-feed-repeater' ng-repeat='story in newsFeed'>" +
							"<ny-times-story index='{{$index}}' page='{{pagesLoaded}}' story='story' " +
								"apply-type-of-material-filter='applyTypeOfMaterialFilter' " +
								"apply-news-desk-filter='applyNewsDeskFilter' " +
								"apply-empty-story-text-filter='applyEmptyStoryTextFilter' " +
								"apply-story-text-contains-query-filter = 'applyStoryTextContainsQueryFilter' " +
								"apply-by-line-contains-query-filter='applyByLineContainsQueryFilter' " +
								"story-has-active-filter='storyHasActiveFilter'>" +
							"</ny-times-story>" +
						"</div>" +
					"</div>" +

					"<div class='col-xs-12 col-sm-offset-2 col-sm-10 ny-times-story-count-summary-container'>" +
						"<div class='ny-times-story-count-summary'>" +
							"<div class='ny-times-story-header'>" +
								"<h2 ng-show='showNYTimesStoryFeedContainer'>Please Wait For More Stories To Load</h2>" +
								"<h2 ng-show='showNYTimesFilterContainer'>New York Times Stories Filter Summary</h2>" +
							"</div>" +
							"<div class='ny-times-story-filter-counts'>" +
								"<div class='ny-times-story-count-total'>" +
									"Stories: {{totalStoryCount}}" +
								"</div>" +
								"<div class='ny-times-story-count-filtered'>" +
									"Filtered: {{totalFilteredCount}}" +
								"</div>" +
								"<div class='ny-times-story-count-unfiltered'>" +
									"Unfiltered: {{totalUnfilteredStoryCount}}" +
								"</div>" +
							"</div>" +
						"</div>" +
					"</div>" +
				"</div>" +
			"</div>";
    });
}());

