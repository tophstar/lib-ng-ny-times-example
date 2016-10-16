(function () {
	define([], function () {
        return "" +
			"<div class='ny-times-filter'>" +
				"<div class='ny-times-filter-types' >" +
			
					"<div class='ny-times-filter-type'> " +
						"<h3>Empty Story:</h3>" +
						"<div class='ny-times-filter-on-off-container'>" +
							"<span class='ny-times-filter-on active-option-on' ng-class='applyEmptyStoryTextFilterClass' ng-click=\"clickFilterOptionClick('TURN_FILTER_ON', 'STORY_TEXT_EMPTY_FILTER_NAME')\">on</span>" +
							"<span class='ny-times-filter-off active-option-on' ng-class='applyEmptyStoryTextFilterClass' ng-click=\"clickFilterOptionClick('TURN_FILTER_OFF', 'STORY_TEXT_EMPTY_FILTER_NAME')\">off</span>" +
						"</div>" +
					"</div>" +

					"<div class='ny-times-filter-type'> " +
						"<h3>Story Contains Query:</h3>" +
						"<div class='ny-times-filter-on-off-container'>" +
							"<span class='ny-times-filter-on active-option-on' ng-class='applyStoryTextContainsQueryFilterClass' ng-click=\"clickFilterOptionClick('TURN_FILTER_ON', 'STORY_TEXT_CONTAINS_QUERY_NAME')\">on</span>" +
							"<span class='ny-times-filter-off active-option-on' ng-class='applyStoryTextContainsQueryFilterClass' ng-click=\"clickFilterOptionClick('TURN_FILTER_OFF', 'STORY_TEXT_CONTAINS_QUERY_NAME')\">off</span>" +
						"</div>" +
					"</div>" +

					"<div class='ny-times-filter-type'> " +
						"<h3>Byline Contains Query:</h3>" +
						"<div class='ny-times-filter-on-off-container'>" +
							"<span class='ny-times-filter-on active-option-on' ng-class='applyByLineContainsQueryFilterClass' ng-click=\"clickFilterOptionClick('TURN_FILTER_ON', 'STORY_BYLINE_CONTAINS_QUERY_NAME')\">on</span>" +
							"<span class='ny-times-filter-off active-option-on' ng-class='applyByLineContainsQueryFilterClass' ng-click=\"clickFilterOptionClick('TURN_FILTER_OFF', 'STORY_BYLINE_CONTAINS_QUERY_NAME')\">off</span>" +
						"</div>" +
					"</div>" +

					"<div><ny-times-filter-type filter-options='newsDeskFilters' filter-type='{{newsDeskFilterName}}'></ny-times-filter-type></div>" +

					"<div><ny-times-filter-type filter-options='typeOfMaterialFilters' filter-type='{{typeOfMaterialFilterName}}'></ny-times-filter-type></div>" +

				"</div>" +
			"</div>";
    });
}());