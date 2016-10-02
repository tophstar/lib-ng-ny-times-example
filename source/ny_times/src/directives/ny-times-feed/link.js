(function (global) {
    var Link = function (scope, element) {
        scope.something = 'foooooooooooooooootooooo';

        scope.doSomething = function () {
            scope.something = 'new';
        };
    };

    define(["angular"],
        function (angular) {
            Link.angular = angular;
            Link.document = global.document;
            return Link;
        }
    );
}(window));