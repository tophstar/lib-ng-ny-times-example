(function () {
  var Controller = function ($scope, FILTER_CONSTANTS) {
	$scope.applyEmptyStoryTextFilterClass = {'active-option-on':true, 'active-option-off': false};
	$scope.applyStoryTextContainsQueryFilterClass = {'active-option-on':true, 'active-option-off': false};
	$scope.applyByLineContainsQueryFilterClass = {'active-option-on':true, 'active-option-off': false};

    $scope.clickFilterOptionClick = function (state, modelName) {
    	let filterClassName = FILTER_CONSTANTS[modelName]+'Class';
    	let filterModelName = FILTER_CONSTANTS[modelName];

    	if(FILTER_CONSTANTS[state] === FILTER_CONSTANTS.TURN_FILTER_ON){
    		$scope[filterClassName] = {'active-option-on':true, 'active-option-off': false};
    		$scope[filterModelName] = true;
    	}else{
    		$scope[filterClassName] = {'active-option-on':false, 'active-option-off': true};
    		$scope[filterModelName] = false;
    	}

        $scope.$emit('filterChange');
    };
  };

  define([], function () {
    Controller.$inject = ["$scope", 'FILTER_CONSTANTS'];
    return Controller;
  });
}());