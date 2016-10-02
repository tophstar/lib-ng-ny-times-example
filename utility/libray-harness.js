var nyTimesHarness = (function () {
        /**
         * Instance of the library
         * @type {[type]}
         */
        nyTimes = null,

        /**
         * Build the Terminal
         * @return {[type]} [description]
         */
        buildTerminal = function () {
            // Need to cache bust..
            require.config({
                baseUrl: '',
                paths: {
                    "nyTimes": "scripts/nyTimes.js?cachebust=" + (new Date()).getTime()
                }
            });

            require(["nyTimes"], function (Terminal) {
                var terminalOptions = {
                    target: "#new-york-times-element"
                };

                terminal = Terminal(terminalOptions);

            });
        }

    return {
        /**
         * terminal constructor
         *
         * @return {[type]} [description]
         */
        construct: function () {
            buildTerminal();
        },
    };
})();

$(document).ready(nyTimesHarness.construct);