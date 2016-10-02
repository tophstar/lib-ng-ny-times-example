var nyTimesHarness = (function () {
        /**
         * Instance of the library
         * @type {[type]}
         */
    var nyTimes = null,
        nyTimes2 = null,


        /**
         * Build the Library
         * @return {[type]} [description]
         */
        buildLibrary = function () {
            // Need to cache bust..
            require.config({
                baseUrl: '',
                paths: {
                    "ny_times": "../build/ny_times"//.js?cachebust=" + (new Date()).getTime()
                }
            });

            require(["ny_times"], function (Library) {
                var options = {
                    target: "#new-york-times-element"
                };

                nyTimes = Library(options);

            });

            require(["ny_times"], function (Library) {
                var options = {
                    target: "#new-york-times-element-2"
                };

                nyTimes2 = Library(options);

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