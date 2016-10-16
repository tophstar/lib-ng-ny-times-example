(function () {
	define([], function () {
        return "" +
		"<div class='ny-time-filter-type-option' ng-show='showAllOptions || filterOn'>" +
			"<input type='checkbox' ng-click='clickFilterOptionCheckbox()' ng-model='filterOn'>" +
			"{{filterOptionName}}" +
		"</div>";
    });
}());