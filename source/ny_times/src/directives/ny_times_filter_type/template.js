(function () {
	define([], function () {
        return "" +
		"<div class='ny-times-filter-type'>" +
						
			"<h3>{{filterType}}:</h3>" +
			"<div class='row ny-times-filter-options'>" +
				"<div class='ny-time-filter-type-option-repeater col-xs-3' ng-show='showAllOptions || filterOptionValue' ng-repeat='(filterOption, filterOptionValue) in filterOptions' class='ny-times-filter-option'>" +
					"<ny-times-filter-type-option show-all-options='showAllOptions' filter-option='filterOptionValue'></ny-times-filter-type-option>" +
				"</div>" +

			"</div>" +
			"<div>" +
				"<a class='ny-times-filter-options-show-all' ng-hide='showAllOptions' ng-click='showAllFilterOptions()'>" +
					"show all" +
				"</a>" +
				"<a class='ny-times-filter-options-show-all' ng-show='showAllOptions' ng-click='showLessFilterOptions()'>" +
					"show less" +
				"</a>" +
			"</div>" +
		"</div>";
    });
}());