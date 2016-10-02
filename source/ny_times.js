/* global alert */
(function () {
  var NYTimes = function (options) {
    var NYTimesOptions = NYTimes.Options(options);
    var boot = NYTimes.Boot(NYTimesOptions);
    return boot.getMainAPI();
  };

  define(["./ny_times/options", "./ny_times/boot_runner"], function (Options, Boot) {
    NYTimes.Options = Options;
    NYTimes.Boot = Boot;
    return NYTimes;
  });
}());
