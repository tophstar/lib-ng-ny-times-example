(function (global) {
    var Link = function (scope, element) {

        element.on('$destroy', function() {
        });
    };

    define(["angular"],
        function (angular) {
            Link.angular = angular;
            Link.document = global.document;
            return Link;
        }
    );
}(window));