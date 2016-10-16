var nyTimesHarness = (function () {
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
        buildLibrary = function () {
            

            // check for existing angular
            var angular = window.angular,
                // check for old versions of angular
                oldAngular = angular && !!angular.version.full.match(/^1\.[0-1](\.|$)/),
                localAngularPath = '../bower_components/angular/angular',
                paths = {"ny-times":"../build/ny-times"},
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
                /*{
                    "angular": "../bower_components/angular/angular",
                    "ny-times": "../build/ny-times"//?cachebust=" + (new Date()).getTime()
                }*/
            });



            require(["ny-times", "ny-times"], function (Library, Library2) {
                var options = {
                    target: "#new-york-times-element"
                };

                nyTimes = Library(options);

                options.target= "#new-york-times-element-2";

                nyTimes2 = Library2(options);





                angular.module('F1FeederApp.controllers', []).
                controller('driversController', function($scope) {
                    $scope.driversList = [
                      {
                          Driver: {
                              givenName: 'Sebastian',
                              familyName: 'Vettel'
                          },
                          points: 322,
                          nationality: "German",
                          Constructors: [
                              {name: "Red Bull"}
                          ]
                      },
                      {
                          Driver: {
                          givenName: 'Fernando',
                              familyName: 'Alonso'
                          },
                          points: 207,
                          nationality: "Spanish",
                          Constructors: [
                              {name: "Ferrari"}
                          ]
                      }
                    ];
                });

                angular.module('F1FeederApp', [
                  'F1FeederApp.controllers',
                  'NYTimesApp'
                ]);

                angular.bootstrap(document, ['F1FeederApp']);
            });
        }

    return {
        /**
         * terminal constructor
         *
         * @return {[type]} [description]
         */
        construct: function () {
            buildLibrary();
        },
    };
})();

$(document).ready(nyTimesHarness.construct);