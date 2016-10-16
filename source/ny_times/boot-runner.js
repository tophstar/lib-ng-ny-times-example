(function () {
  var Boot = function (options) {
    var mainAPI = Boot.booter(options);
    
    var self = {
      getMainAPI: function getMainAPI() {
        return mainAPI;
      },

      toString: function toString() {
        return "[object Boot]";
      }
    };

    return self;
  };

  define(["./boot"], function (booter) {
    Boot.booter = booter;
    return Boot;
  });
}());
