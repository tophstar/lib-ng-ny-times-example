(function () {
    var InfiniteScroll = function () {
        return {
            restrict: "A",
            replace: false,
            //controller: InfiniteScroll.Controller,
            link: InfiniteScroll.Link,
            //template: InfiniteScroll.Template
        };
    };

    define([
        //"./infinite_scroller/controller"
        "./infinite_scroller/link"
        //"./infinite_scroller/template"
    ], function (
        //Controller
        Link
        //Template
        ) {
        //InfiniteScroll.Controller = Controller;
        InfiniteScroll.Link = Link;
        //InfiniteScroll.Template = Template;
        InfiniteScroll.NAME = "infiniteScroll";
        return InfiniteScroll;
    });
}());