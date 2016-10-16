var pageApp = (function () {
    /**
     * Instance of the library
     * @type {[type]}
     */
    nyTimes = null,
    nyTimes2 = null,


        /**
         * Build the Library
         * @return {[type]} [description]
         */
        buildPage = function () {
            

            // check for existing angular
            var angular = window.angular,
                // check for old versions of angular
                oldAngular = angular && !!angular.version.full.match(/^1\.[0-1](\.|$)/),
                localAngularPath = '../bower_components/angular/angular',
                paths = {
                  "ny-times":"../build/ny-times",
                  "LoadMainApp":"./load-main-app"},
                noConflict;

            // check for jQuery 
            if (!angular || oldAngular) {
                // load if it's not available or doesn't meet min standards
                paths.angular = localAngularPath;
                noConflict = !!oldjQuery;
            } else {
                // register the current jQuery
                define('angular', [], function() { return angular; });
            }



            require.config({
                baseUrl: '',
                paths: paths
            });



            require(["LoadMainApp", "ny-times", "ny-times"], function (LoadMainApp, Library, Library2) {

                var options = {
                    target: "#new-york-times-element",
                    NYTimesAPIKey: "7096e4a19fb3494d88b264071d2c2e4b",
                    NYTimesDefaultQuery: "beer"                  
                };

                nyTimes = Library(options);

//                options.target = "#new-york-times-element-2";

//                nyTimes2 = Library2(options);


                LoadMainApp();
            });
        }

    return {
        /**
         * terminal constructor
         *
         * @return {[type]} [description]
         */
        construct: function () {
            buildPage();
        },
    };
})();

$(document).ready(pageApp.construct);