(function (global) {
    var Constants = function (module) {
        global.angular.forEach(Constants.list, function (costant) {
            module.constant(costant['NAME'], costant['VALUES']);
            //Add constants to the root scope so the html templates will have access to them aswell.
            module.run(["$rootScope", function ($rootScope, PLAYER_STATES) {
                $rootScope[costant['NAME']] = costant['VALUES'];
            }]);
        });
    };

    define([
        "./constants/filter-constants",
        "./constants/story-constants"
    ], function (
        FilterConstants,
        StoryConstants
    ) {
        Constants.list = arguments;
        return Constants;
    });
}(window));