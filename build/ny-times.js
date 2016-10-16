"use strict";

(function (global) {
  var Options = function Options(opts) {
    var MainContainer,
        angular = Options.angular;

    var self = {

      getNYTimesApiKey: function getNYTimesApiKey() {
        return opts.NYTimesAPIKey;
      },

      getDefaultNYTimesQuery: function getDefaultNYTimesQuery() {
        return opts.NYTimesDefaultQuery;
      },

      getMainElementSelector: function getMainElementSelector() {
        return opts.target;
      },

      getOnErrorCallback: function getOnErrorCallback() {
        return opts.onError || null;
      },

      setOnError: function setOnError(onError) {
        if (angular.isFunction(onError)) {
          opts.onError = onError;
        }
      },

      getOnSetUpError: function getOnSetUpError() {
        return opts.onSetUpError || null;
      },

      setOnSetUpError: function setOnSetUpError(onSetUpError) {
        if (angular.isFunction(onSetUpError)) {
          opts.onSetUpError = onSetUpError;
        }
      },

      setMainContainer: function setMainContainer(container) {
        MainContainer = MainContainer;
      },

      getMainContainer: function getMainContainer() {
        return MainContainer;
      },

      toString: function toString() {
        return "[object Options]";
      }
    };

    return self;
  };

  define('ny_times/options', ["angular"], function (angular) {
    Options.angular = angular;
    return Options;
  });
})(window);

(function () {

  var Template = function Template(opts) {
    var template = "" + "<div " + "class='ny-times-template' ng-controller='MainLibraryCtrl'>" + "<ny-times-feed></ny-times-feed>" + "</div>";
    return template;
  };

  define('ny_times/src/template_renderer/main-template', [], function () {

    return Template;
  });
})();
/* global alert */
(function (global) {
  var device, onSetUpError, angular, mainTargetSelector, mainTarget;
  var TemplateRenderer = function TemplateRenderer(options) {
    angular = TemplateRenderer.angular;
    device = TemplateRenderer.device;
    onSetUpError = options.getOnSetUpError();

    function setUpError(fallback, message) {
      if (angular.isFunction(onSetUpError)) {
        onSetUpError(fallback, message);
      } else {
        throw new Error(message);
      }
    }

    mainTargetSelector = options.getMainElementSelector();
    mainTarget = TemplateRenderer.document.querySelector(mainTargetSelector);

    if (mainTarget) {
      options.setMainContainer(mainTarget);
      var template = TemplateRenderer.getMainTemplateMarkup(options);
      angular.element(mainTarget).html(template);
    } else {
      setUpError(false, "No target found. Please set the target property to a valid DOM element selector.");
    }
  };

  function getMainTemplateMarkup(options) {

    //Select template based on options
    var template = TemplateRenderer.DESKTOP_TEMPLATE(options);

    return template;
  }

  define('ny_times/src/template-renderer', ["angular", "./template_renderer/main-template"], function (angular, MainTemplate) {

    TemplateRenderer.DESKTOP_TEMPLATE = MainTemplate;

    TemplateRenderer.angular = angular;
    TemplateRenderer.document = global.document;

    TemplateRenderer.getMainTemplateMarkup = getMainTemplateMarkup;

    return TemplateRenderer;
  });
})(window);
(function () {

  var Filter = {};

  define('ny_times/src/constants/filter-constants', [], function () {
    Filter.NAME = "FILTER_CONSTANTS";
    Filter.VALUES = {
      TURN_FILTER_ON: "ON",
      TURN_FILTER_OFF: "OFF",
      STORY_TEXT_EMPTY_FILTER_NAME: "applyEmptyStoryTextFilter",
      STORY_TEXT_CONTAINS_QUERY_NAME: "applyStoryTextContainsQueryFilter",
      STORY_BYLINE_CONTAINS_QUERY_NAME: "applyByLineContainsQueryFilter"
    };

    return Filter;
  });
})();
(function () {

  var Story = {};

  define('ny_times/src/constants/story-constants', [], function () {
    Story.NAME = "STORY_CONSTANTS";
    Story.VALUES = {
      UNKOWN_STORY_CONTENT_VALUE: "Unknown"
    };

    return Story;
  });
})();
(function (global) {
  var Constants = function Constants(module) {
    global.angular.forEach(Constants.list, function (costant) {
      module.constant(costant['NAME'], costant['VALUES']);
      //Add constants to the root scope so the html templates will have access to them aswell.
      module.run(["$rootScope", function ($rootScope, PLAYER_STATES) {
        $rootScope[costant['NAME']] = costant['VALUES'];
      }]);
    });
  };

  define('ny_times/src/constants', ["./constants/filter-constants", "./constants/story-constants"], function (FilterConstants, StoryConstants) {
    Constants.list = arguments;
    return Constants;
  });
})(window);
(function () {
  var MainCtrl = function MainCtrl($scope, $mainOptions) {
    var angular = MainCtrl.angular,
        mainContainer = $mainOptions.getMainContainer();

    $scope.options = $mainOptions;
    $scope.mainContainer = mainContainer;

    var self = {
      onError: function onError(callback) {
        $mainOptions.setOnError(callback);
      }
    };

    return self;
  };

  define('ny_times/src/controllers/main-ctrl', ["angular"], function (angular) {
    MainCtrl.angular = angular;
    MainCtrl.NAME = "MainLibraryCtrl";
    MainCtrl.$inject = ["$scope", "$mainOptions"];
    return MainCtrl;
  });
})();
(function () {
  var Controllers = function Controllers(module) {
    Controllers.angular.forEach([Controllers.MainCTRL], function (Ctrl) {
      module.controller(Ctrl.NAME, Ctrl);
    });
  };

  define('ny_times/src/controllers', ["angular", "./controllers/main-ctrl"], function (angular, mainCTRL) {
    Controllers.MainCTRL = mainCTRL;
    Controllers.angular = angular;
    return Controllers;
  });
})();
(function () {
  var Link = function Link(scope, elem, attrs) {
    var angular = Link.angular,
        $injector = angular.element(elem).injector(),
        $window = $injector.get("$window"),
        $rootScope = $injector.get("$rootScope"),
        $timeout = $injector.get("$timeout");

    var checkWhenEnabled, handler, scrollDistance, scrollEnabled;
    $window = angular.element($window);
    scrollDistance = 0;

    if (attrs.infiniteScrollDistance != null) {
      scope.$watch(attrs.infiniteScrollDistance, function (value) {
        return scrollDistance = parseInt(value, 10);
      });
    }

    scrollEnabled = true;
    checkWhenEnabled = false;

    if (attrs.infiniteScrollDisabled != null) {
      scope.$watch(attrs.infiniteScrollDisabled, function (value) {
        scrollEnabled = !value;
        if (scrollEnabled && checkWhenEnabled) {
          checkWhenEnabled = false;
          return handler();
        }
      });
    }

    handler = function handler() {
      //only apply the handler if the scroll element is visible.
      if (!angular.element(elem).is(':visible')) {
        return false;
      }

      var elementBottom, remaining, shouldScroll, windowBottom;
      windowBottom = $window.height() + $window.scrollTop();
      elementBottom = elem.offset().top + elem.height();
      remaining = elementBottom - windowBottom;
      shouldScroll = remaining <= $window.height() * scrollDistance;

      if (shouldScroll && scrollEnabled) {
        if ($rootScope.$$phase) {
          return scope.$eval(attrs.infiniteScroll);
        } else {
          return scope.$apply(attrs.infiniteScroll);
        }
      } else if (shouldScroll) {
        return checkWhenEnabled = true;
      }
    };

    $window.off('scroll', handler);
    $window.on('scroll', handler);

    scope.$on('$destroy', function () {
      return $window.off('scroll', handler);
    });

    /*return $timeout(function() {
      if (attrs.infiniteScrollImmediateCheck) {
        if (scope.$eval(attrs.infiniteScrollImmediateCheck)) {
          return handler();
        }
      } else {
        return handler();
      }
    }, 0);*/
  };

  define('ny_times/src/directives/infinite_scroller/link', ["angular"], function (angular) {
    Link.angular = angular;
    return Link;
  });
})();
(function () {
  var InfiniteScroll = function InfiniteScroll() {
    return {
      restrict: "A",
      replace: false,
      //controller: InfiniteScroll.Controller,
      link: InfiniteScroll.Link
    };
  };

  define('ny_times/src/directives/infinite-scroller', [
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
})();
(function () {
  var Controller = function Controller($scope, $http, $mainOptions, $timeout) {

    var nyTimesQuery = $mainOptions.getDefaultNYTimesQuery().toLowerCase();
    $scope.currentTotalUnfilterCount = 0;
    $scope.totalFilteredCount = 0;
    $scope.totalStoryCount = 0;
    $scope.totalUnfilteredStoryCount = 0;

    $scope.showNYTimesStoryFeedContainer = true;
    $scope.showNYTimesFilterContainer = false;
    $scope.nyTimesStoryFeedNavClass = { 'active-nav': true };
    $scope.nyTimesStoryFilterNavClass = {};

    $scope.applyTypeOfMaterialFilter = true;
    $scope.typeOfMaterialFilterName = "Type Of Materials";
    $scope.typeOfMaterialFilterDefaults = ["timestopic", "Paid Death Notice", "Obituary"];
    $scope.typeOfMaterialFilters = [{ "Addendum": false }, { "An Analysis": false }, { "An Appraisal": false }, { "Article": false }, { "Banner": false }, { "Biography": false }, { "Birth Notice": false }, { "Blog": false }, { "Brief": false }, { "Caption": false }, { "Chronology": false }, { "Column": false }, { "Correction": false }, { "Economic Analysis": false }, { "Editorial": false }, { "Editorial Cartoon": false }, { "Editors' Note": false }, { "First Chapter": false }, { "Front Page": false }, { "Glossary": false }, { "Interactive Feature": false }, { "Interactive Graphic": false }, { "Interview": false }, { "Letter": false }, { "List": false }, { "Marriage Announcement": false }, { "Military Analysis": false }, { "News": false }, { "News Analysis": false }, { "Newsletter": false }, { "Obituary": false }, { "Obituary (Obit)": false }, { "Op-Ed": false }, { "Paid Death Notice": false }, { "Postscript": false }, { "Premium": false }, { "Question": false }, { "Quote": false }, { "Recipe": false }, { "Review": false }, { "Schedule": false }, { "SectionFront": false }, { "Series": false }, { "Slideshow": false }, { "Special Report": false }, { "Statistics": false }, { "Summary": false }, { "Text": false }, { 'timestopic': false }, { "Video": false }, { "Web Log": false }];

    /*    $scope.typeOfMaterialsOptions             = ["Addendum","An Analysis","An Appraisal","Article","Banner","Biography",
                "Birth Notice","Blog","Brief","Caption","Chronology","Column","Correction","Economic Analysis",
                "Editorial","Editorial Cartoon","Editors' Note","First Chapter","Front Page","Glossary","Interactive Feature",
                "Interactive Graphic","Interview","Letter","List","Marriage Announcement","Military Analysis","News",
                "News Analysis","Newsletter","Obituary","Obituary (Obit)","Op-Ed","Paid Death Notice",
                "Postscript","Premium","Question","Quote","Recipe","Review","Schedule","SectionFront",
                "Series","Slideshow","Special Report","Statistics","Summary","Text","timestopic", "Video","Web Log"];
    */

    $scope.applyNewsDeskFilter = true;
    $scope.newsDeskFilterName = "News Desk";
    $scope.newsDeskFilterDefaults = ["Games"];
    $scope.newsDeskFilters = [{ "Adventure Sports": false }, { "Arts & Leisure": false }, { "Arts": false }, { "Automobiles": false }, { "Blogs": false }, { "Books": false }, { "Booming": false }, { "Business Day": false }, { "Business": false }, { "Cars": false }, { "Circuits": false }, { "Classifieds": false }, { "Connecticut": false }, { "Crosswords & Games": false }, { "Culture": false }, { "DealBook": false }, { "Dining": false }, { "Editorial": false }, { "Education": false }, { "Energy": false }, { "Entrepreneurs": false }, { "Environment": false }, { "Escapes": false }, { "Fashion & Style": false }, { "Fashion": false }, { "Favorites": false }, { "Financial": false }, { "Flight": false }, { "Food": false }, { "Foreign": false }, { "Generations": false }, { "Games": false }, { "Giving": false }, { "Global Home": false }, { "Health & Fitness": false }, { "Health": false }, { "Home & Garden": false }, { "Home": false }, { "Jobs": false }, { "Key": false }, { "Letters": false }, { "Long Island": false }, { "Magazine": false }, { "Market Place": false }, { "Media": false }, { "Men's Health": false }, { "Metro": false }, { "Metropolitan": false }, { "Movies": false }, { "Museums": false }, { "National": false }, { "Nesting": false }, { "Obits": false }, { "Obituaries": false }, { "Obituary": false }, { "OpEd": false }, { "Opinion": false }, { "Outlook": false }, { "Personal Investing": false }, { "Personal Tech": false }, { "Play": false }, { "Politics": false }, { "Regionals": false }, { "Retail": false }, { "Retirement": false }, { "Science": false }, { "Small Business": false }, { "Society": false }, { "Sports": false }, { "Style": false }, { "Sunday Business": false }, { "Sunday Review": false }, { "Sunday Styles": false }, { "T Magazine": false }, { "T Style": false }, { "Technology": false }, { "Teens": false }, { "Television": false }, { "The Arts": false }, { "The Business of Green": false }, { "The City Desk": false }, { "The City": false }, { "The Marathon": false }, { "The Millennium": false }, { "The Natural World": false }, { "The Upshot": false }, { "The Weekend": false }, { "The Year in Pictures": false }, { "Theater": false }, { "Then & Now": false }, { "Thursday Styles": false }, { "Times Topics": false }, { "Travel": false }, { "U.S.": false }, { "Universal": false }, { "Upshot": false }, { "UrbanEye": false }, { "Vacation": false }, { "Washington": false }, { "Wealth": false }, { "Weather": false }, { "Week in Review": false }, { "Week": false }, { "Weekend": false }, { "Westchester": false }, { "Wireless Living": false }, { "Women's Health": false }, { "Working": false }, { "Workplace": false }, { "World": false }, { "Your Money": false }];

    /*    $scope.newsDesksOptions                   = ["Adventure Sports", "Arts & Leisure","Arts",
                "Automobiles","Blogs","Books","Booming",
                "Business Day","Business","Cars","Circuits","Classifieds","Connecticut","Crosswords & Games",
                "Culture","DealBook","Dining","Editorial","Education","Energy","Entrepreneurs","Environment",
                "Escapes","Fashion & Style","Fashion","Favorites",
                "Financial","Flight","Food","Foreign","Generations","Giving","Global Home",
                "Health & Fitness","Health","Home & Garden","Home","Jobs","Key",
                "Letters","Long Island","Magazine","Market Place",
                "Media","Men's Health","Metro","Metropolitan",
                "Movies","Museums","National","Nesting","Obits",
                "Obituaries","Obituary","OpEd","Opinion","Outlook","Personal Investing",
                "Personal Tech","Play","Politics","Regionals","Retail",
                "Retirement","Science","Small Business","Society","Sports","Style",
                "Sunday Business","Sunday Review","Sunday Styles","T Magazine",
                "T Style","Technology","Teens","Television","The Arts","The Business of Green",
                "The City Desk","The City","The Marathon","The Millennium",
                "The Natural World","The Upshot","The Weekend","The Year in Pictures",
                "Theater","Then & Now","Thursday Styles","Times Topics","Travel",
                "U.S.","Universal","Upshot","UrbanEye","Vacation","Washington",
                "Wealth","Weather","Week in Review","Week","Weekend",
                "Westchester","Wireless Living","Women's Health","Working",
                "Workplace","World","Your Money"];
    */

    $scope.applyEmptyStoryTextFilter = true;
    $scope.applyStoryTextContainsQueryFilter = true;
    $scope.applyByLineContainsQueryFilter = true;

    $scope.newsFeed = [];
    $scope.pagesLoaded = 0;
    $scope.throttleScroller = false;
    $scope.currentPage = 0;

    function applyFilterDefaults(filterArray, defaultArray) {
      filterArray.forEach(function (currentArrayItem) {
        var filterName = Object.keys(currentArrayItem)[0];
        if (defaultArray.indexOf(filterName) !== -1) {
          currentArrayItem[filterName] = true;
        }
      });
    }

    applyFilterDefaults($scope.typeOfMaterialFilters, $scope.typeOfMaterialFilterDefaults);
    applyFilterDefaults($scope.newsDeskFilters, $scope.newsDeskFilterDefaults);

    function capitalize(s) {
      return s && s[0].toUpperCase() + s.slice(1);
    }

    function textHasSentanceWithFirstWordQuery(text) {
      if (!text) {
        return false;
      }

      var aSentanceStartsWithQuery = false;
      var textArray = text.split(".");

      for (var i = 0; i < textArray.length; i++) {
        var firstFiveLetters = capitalize(textArray[i].substring(0, 4).toLowerCase());

        if (firstFiveLetters.indexOf(capitalize(nyTimesQuery)) !== -1) {
          aSentanceStartsWithQuery = true;
        }
      }

      return aSentanceStartsWithQuery;
    }

    function textContainsUncaplitalizedQuery(text) {
      if (!text) {
        return false;
      }

      return text.indexOf(nyTimesQuery.toLowerCase()) !== -1;
    }

    function bylineContainsQuery(story) {
      if (!story || !story.byline || !story.byline.original) {
        return false;
      }

      return story.byline.original.toLowerCase().indexOf(nyTimesQuery) !== -1;
    }

    /**
     *  This will filter out any story that has the query in the byline, but does not have the query in any of the text.
     *
     *  Example Use Case:
     *  The byline has an author with the last name "Beer" and "Beer" does not appear in any of the text uncapitalized.
     *
     *  Note:
     *  This could filter out a story by an author with the last name "Beer" and the only occurance of the word "Beer" is capitalized
     *  as a play on the author's name.
     * 
     */
    function filterByLineContainsQuery(story) {
      var leadParagraphHasQuery = textContainsUncaplitalizedQuery(story.lead_paragraph);
      var snippitHasQuery = textContainsUncaplitalizedQuery(story.lead_paragraph);
      var headlineHasQuery = textContainsUncaplitalizedQuery(story.lead_paragraph);

      return !bylineContainsQuery(story) || leadParagraphHasQuery || snippitHasQuery || headlineHasQuery;
    }

    /**
     *  This will filter out any story that doesn't have the query word as a non-proper noun in any of the text.
     *
     *  Example Use Case:
     *  The byline an author with the last name "Beer" and the only ocurrance of "Beer" in the text areas is their last name (capitalized). 
     *
     *  Note:
     *  This does not filter out author use case where the author's last name "Beer" is only used at the begining of a sentance.
     */
    function filterContainsQuery(story) {
      var leadParagraphHasQuery = textHasSentanceWithFirstWordQuery(story.lead_paragraph) || textContainsUncaplitalizedQuery(story.lead_paragraph);
      var snippitHasQuery = textHasSentanceWithFirstWordQuery(story.lead_paragraph) || textContainsUncaplitalizedQuery(story.lead_paragraph);
      var headlineHasQuery = textHasSentanceWithFirstWordQuery(story.lead_paragraph) || textContainsUncaplitalizedQuery(story.lead_paragraph);

      return leadParagraphHasQuery || snippitHasQuery || headlineHasQuery;
    }

    function matchArrayItem(filterArray, text) {
      var itemMatch = false;

      filterArray.forEach(function (filter) {
        var filterName = Object.keys(filter)[0];
        if (filter[filterName] && text === filterName) {
          itemMatch = true;
        }
      });

      return itemMatch;
    }

    /**
     *  timestopic return storys that are a topic header instead of a story.
     */
    function filterTypeOfMaterial(story) {
      return matchArrayItem($scope.typeOfMaterialFilters, story.type_of_material);
    }

    function filterNewsDesk(story) {
      return matchArrayItem($scope.newsDeskFilters, story.news_desk);
    }

    function filterEmptyText(text) {
      return !!text && text !== "";
    }

    function filterStoryTexts(story) {
      return filterEmptyText(story.lead_paragraph) || filterEmptyText(story.snippit) || filterEmptyText(story.headline.main);
    }

    function addTypeOfMaterialFilter(story) {
      story.typeOfMaterialFilter = false;

      if (filterTypeOfMaterial(story)) {
        story.typeOfMaterialFilter = true;
      }
    }

    function addNewsDeskFilter(story) {
      story.newsDeskFilter = false;

      if (filterNewsDesk(story)) {
        story.newsDeskFilter = true;
      }
    }

    function addEmptyStoryTextFilter(story) {
      story.emptyStoryTextFilter = false;

      if ($scope.applyEmptyStoryTextFilter && !filterStoryTexts(story)) {
        story.emptyStoryTextFilter = true;
      }
    }

    function addStoryTextContainsQueryFilter(story) {
      story.storyTextContainsQueryFilter = false;

      if ($scope.applyStoryTextContainsQueryFilter && !filterContainsQuery(story)) {
        story.storyTextContainsQueryFilter = true;
      }
    }

    function addBylineContainsQueryFilter(story) {
      story.storyBylineContainsQueryFilter = false;

      if ($scope.applyByLineContainsQueryFilter && !filterByLineContainsQuery(story)) {
        story.storyBylineContainsQueryFilter = true;
      }
    }

    function addNYTimesStoryFilters(story, index) {
      addTypeOfMaterialFilter(story);
      addNewsDeskFilter(story);
      addEmptyStoryTextFilter(story);
      addStoryTextContainsQueryFilter(story);
      addBylineContainsQueryFilter(story);
    }

    function filterResponse(responseDocs) {
      responseDocs.forEach(addNYTimesStoryFilters);
      /*responseDocs.forEach(addTypeOfMaterialFilter);
      responseDocs.forEach(addNewsDeskFilter);
      responseDocs.forEach(addEmptyStoryTextFilter);
      responseDocs.forEach(addStoryTextContainsQueryFilter);
      responseDocs.forEach(addBylineContainsQueryFilter);
      /*if($scope.applyTypeOfMaterialFilter){
        responseDocs = responseDocs.filter(filterTypeOfMaterial);
      }
      if($scope.applyNewsDeskFilter){
        responseDocs = responseDocs.filter(filterNewsDesk);
      }
      if($scope.applyEmptyStoryTextFilter){
        responseDocs = responseDocs.filter(filterStoryTexts);        
      }
      if($scope.applyStoryTextContainsQueryFilter){
        responseDocs = responseDocs.filter(filterContainsQuery);
      }
      if($scope.applyByLineContainsQueryFilter){
        responseDocs = responseDocs.filter(filterByLineContainsQuery);        
      }*/

      return responseDocs;
    }

    function isNewArrayElement(currentArray, newArrayItem) {
      if (!newArrayItem || newArrayItem === "") {
        return false;
      }

      currentArray.forEach(function (currentArrayItem) {
        if (Object.keys(currentArrayItem)[0] === newArrayItem) {
          return true;
        }
      });

      /*      
      if(currentArray.indexOf(newArrayItem) === -1){
        return true;
      }
      */
      return false;
    }

    function populateAdditionalFilterOptions(responseDocs) {
      responseDocs.forEach(function (story) {
        if (isNewArrayElement($scope.typeOfMaterialFilters, story.type_of_material)) {
          var newTypeOfMaterial = {};
          newTypeOfMaterial[story.type_of_material] = false;
          $scope.typeOfMaterialFilters.push(newTypeOfMaterial);
        }
        if (isNewArrayElement($scope.newsDeskFilters, story.news_desk)) {
          var newTypeOfNewsDesk = {};
          newTypeOfNewsDesk[story.news_desk] = false;
          $scope.newsDeskFilters.push(newTypeOfNewsDesk);
        }
      });
    }

    function filteredStoryCount(newsFeed) {
      var filteredStoryCount = 0;

      newsFeed.forEach(function (story) {
        if ($scope.storyHasActiveFilter(story)) {
          filteredStoryCount++;
        }
      });

      //@todo constant for 10
      return filteredStoryCount;
    }

    function addToFilteredStoryCount(newsFeed) {
      var filteredCount = filteredStoryCount(newsFeed);
      $scope.totalFilteredCount += filteredCount;
      return filteredCount;
    }

    function addToNYTimesStoryCounts(newsFeed) {

      var totalNYTimesFeedCount = void 0,
          currentFilteredStoryCount = void 0;

      totalNYTimesFeedCount = newsFeed.length;
      currentFilteredStoryCount = addToFilteredStoryCount(newsFeed);

      $scope.totalStoryCount += totalNYTimesFeedCount;
      $scope.totalUnfilteredStoryCount += totalNYTimesFeedCount - currentFilteredStoryCount;

      return currentFilteredStoryCount;
    }

    function calculateFilteredStoryCount(newsFeed) {
      var filteredCount = filteredStoryCount(newsFeed);
      $scope.totalFilteredCount += filteredCount;
      return filteredCount;
    }

    function updateNYTimesStoryCounts(newsFeed) {

      var totalNYTimesFeedCount = void 0,
          currentFilteredStoryCount = void 0;

      totalNYTimesFeedCount = newsFeed.length;
      currentFilteredStoryCount = calculateFilteredStoryCount(newsFeed);

      $scope.totalFilteredCount = currentFilteredStoryCount;
      $scope.totalStoryCount = totalNYTimesFeedCount;
      $scope.totalUnfilteredStoryCount = totalNYTimesFeedCount - currentFilteredStoryCount;

      return currentFilteredStoryCount;
    }

    $scope.$on('filterChange', function () {
      $scope.newsFeed = filterResponse($scope.newsFeed);
      updateNYTimesStoryCounts($scope.newsFeed);
      //reset the currentTotalUnfilteredCount to guarentee that 10 story's will load...
      $scope.currentTotalUnfilterCount = 0;
    });

    /*$scope.$watch('typeOfMaterialFilters', function () {
      $scope.newsFeed = filterResponse($scope.newsFeed);
    });
     $scope.$watch('newsDeskFilter', function () {
      $scope.newsFeed = filterResponse($scope.newsFeed);
    });
     $scope.$watch('applyEmptyStoryTextFilter', function () {
      $scope.newsFeed = filterResponse($scope.newsFeed);
    });
     $scope.$watch('applyStoryTextContainsQueryFilter', function () {
      $scope.newsFeed = filterResponse($scope.newsFeed);
    });
     $scope.$watch('applyByLineContainsQueryFilter', function () {
      $scope.newsFeed = filterResponse($scope.newsFeed);
    });
    */

    //Also used in ny_times_story directive
    $scope.storyHasActiveFilter = function (story) {
      var typeOfMaterialFilterState = story.typeOfMaterialFilter && $scope.applyTypeOfMaterialFilter;

      var newsDeskFilterState = story.newsDeskFilter && $scope.applyNewsDeskFilter;

      var emptyStoryTextFilterState = story.emptyStoryTextFilter && $scope.applyEmptyStoryTextFilter;

      var storyTextContainsQueryFilterState = story.storyTextContainsQueryFilter && $scope.applyStoryTextContainsQueryFilter;

      var storyBylineQueryFilterState = story.storyBylineContainsQueryFilter && $scope.applyByLineContainsQueryFilter;

      return typeOfMaterialFilterState || newsDeskFilterState || emptyStoryTextFilterState || storyTextContainsQueryFilterState || storyBylineQueryFilterState;
    };

    $scope.getNYTimesFeed = function (currentPage) {

      $http({
        method: 'GET',
        url: 'https://api.nytimes.com/svc/search/v2/articlesearch.json',
        withCredentials: false,
        headers: {
          'Content-Type': 'application/json; charset=utf-8'
        },
        params: {
          'api-key': $mainOptions.getNYTimesApiKey(),
          'q': nyTimesQuery,
          'page': currentPage
        }
      }).then(function successCallback(response) {
        var filteredNYTimesFeed = void 0;
        var totalNYTimesFeedCount = void 0;
        var currentFilteredStoryCount = void 0;

        $scope.pagesLoaded++;

        populateAdditionalFilterOptions(response.data.response.docs);
        filteredNYTimesFeed = filterResponse(response.data.response.docs);

        totalNYTimesFeedCount = filteredNYTimesFeed.length;

        currentFilteredStoryCount = addToNYTimesStoryCounts(filteredNYTimesFeed);
        $scope.currentTotalUnfilterCount += totalNYTimesFeedCount - currentFilteredStoryCount;

        //        updateNYTimesStoryCounts(filteredNYTimesFeed);
        //        $scope.totalStoryCount += totalNYTimesFeedCount;
        //        $scope.totalUnfilteredStoryCount += totalNYTimesFeedCount - currentFilteredStoryCount;


        $scope.newsFeed = $scope.newsFeed.concat(filteredNYTimesFeed);

        //@todo constant for total to load in...
        if ($scope.currentTotalUnfilterCount < 10) {
          $timeout($scope.getNYTimesFeed, 1500, true, $scope.pagesLoaded);
        } else {
          $scope.currentTotalUnfilterCount = 0;
          $scope.throttleScroller = false;
        }
      }, function errorCallback(response) {
        //@todo handle error and continue throttling until error has been diagnosed....
        $scope.throttleScroller = false;
        //@todo display message "problem with loading, please scroll again..."
      });
    };

    $scope.doSomething = function () {
      $scope.getNYTimesFeed();
    };

    $scope.scrollingFunction = function () {
      if ($scope.throttleScroller) {
        return true;
      }

      $scope.throttleScroller = true;
      $scope.getNYTimesFeed($scope.pagesLoaded);
    };

    $scope.showNYTimesContainerClick = function (clickedContainerOption) {
      var activeNav = void 0;

      activeNav = { 'active-nav': true };

      $scope.showNYTimesFilterContainer = false;
      $scope.showNYTimesStoryFeedContainer = false;

      $scope.nyTimesStoryFeedNavClass = {};
      $scope.nyTimesStoryFilterNavClass = {};

      //@todo make nyTimesStoryFeed a constant
      if (clickedContainerOption === 'nyTimesStoryFeed') {
        $scope.showNYTimesStoryFeedContainer = true;
        $scope.nyTimesStoryFeedNavClass = activeNav;
      } else if (clickedContainerOption === 'nyTimesFilterContainer') {
        $scope.showNYTimesFilterContainer = true;
        $scope.nyTimesStoryFilterNavClass = activeNav;
      }
    };

    $scope.getNYTimesFeed(0);
  };

  define('ny_times/src/directives/ny_times_feed/controller', [], function () {
    Controller.$inject = ["$scope", "$http", "$mainOptions", "$timeout"];
    return Controller;
  });
})();
(function () {
  var Link = function Link(scope, element) {
    element.on('$destroy', function () {});
  };

  define('ny_times/src/directives/ny_times_feed/link', [], function () {
    return Link;
  });
})();
(function () {
  define('ny_times/src/directives/ny_times_feed/template', [], function () {
    return "" + "<div>" + "<div class='row'>" + "<ny-times-sidebar></ny-times-sidebar>" + "<div class='hidden-sm hidden-md hidden-lg ny-times-side-control-xs'>" + "<div ng-click='showNYTimesContainerClick(\"nyTimesStoryFeed\")' " + "ng-class='nyTimesStoryFeedNavClass' class='col-xs-6 sidebar-nav-option'>" + "<h3>Story Feed</h3>" + "</div>" + "<div ng-class='nyTimesStoryFilterNavClass' class='col-xs-6 sidebar-nav-option' " + "ng-click='showNYTimesContainerClick(\"nyTimesFilterContainer\")'>" + "<h3>Filter</h3>" + "</div>" + "</div>" + "<div class='col-xs-12 col-sm-offset-2 col-sm-10 ny-times-filter-container main' ng-show='showNYTimesFilterContainer'>" + "<ny-times-filter typeOfMaterialOptions='typeOfMaterials' " + "apply-empty-story-text-filter='applyEmptyStoryTextFilter' " + "apply-story-text-contains-query-filter='applyStoryTextContainsQueryFilter' " + "apply-by-line-contains-query-filter='applyByLineContainsQueryFilter'>" + "</ny-times-filter>" + "</div>" + "<div infinite-scroll='scrollingFunction()' infinite-scroll-distance='1' infinite-scroll-disabled=''" + "class='col-xs-12 col-sm-offset-2 col-sm-10 ny-times-story-container main' " + "ng-show='showNYTimesStoryFeedContainer'>" + "<div class='ny-times-news-feed-repeater' ng-repeat='story in newsFeed'>" + "<ny-times-story index='{{$index}}' page='{{pagesLoaded}}' story='story' " + "apply-type-of-material-filter='applyTypeOfMaterialFilter' " + "apply-news-desk-filter='applyNewsDeskFilter' " + "apply-empty-story-text-filter='applyEmptyStoryTextFilter' " + "apply-story-text-contains-query-filter = 'applyStoryTextContainsQueryFilter' " + "apply-by-line-contains-query-filter='applyByLineContainsQueryFilter' " + "story-has-active-filter='storyHasActiveFilter'>" + "</ny-times-story>" + "</div>" + "</div>" + "<div class='col-xs-12 col-sm-offset-2 col-sm-10 ny-times-story-count-summary-container'>" + "<div class='ny-times-story-count-summary'>" + "<div class='ny-times-story-header'>" + "<h2 ng-show='showNYTimesStoryFeedContainer'>Please Wait For More Stories To Load</h2>" + "<h2 ng-show='showNYTimesFilterContainer'>New York Times Stories Filter Summary</h2>" + "</div>" + "<div class='ny-times-story-filter-counts'>" + "<div class='ny-times-story-count-total'>" + "Stories: {{totalStoryCount}}" + "</div>" + "<div class='ny-times-story-count-filtered'>" + "Filtered: {{totalFilteredCount}}" + "</div>" + "<div class='ny-times-story-count-unfiltered'>" + "Unfiltered: {{totalUnfilteredStoryCount}}" + "</div>" + "</div>" + "</div>" + "</div>" + "</div>" + "</div>";
  });
})();

(function () {
  var NYTimesFeed = function NYTimesFeed() {
    return {
      restrict: "E",
      replace: true,
      controller: NYTimesFeed.Controller,
      link: NYTimesFeed.Link,
      template: NYTimesFeed.Template
    };
  };

  define('ny_times/src/directives/ny-times-feed', ["./ny_times_feed/controller", "./ny_times_feed/link", "./ny_times_feed/template"], function (Controller, Link, Template) {
    NYTimesFeed.Controller = Controller;
    NYTimesFeed.Link = Link;
    NYTimesFeed.Template = Template;
    NYTimesFeed.NAME = "nyTimesFeed";
    return NYTimesFeed;
  });
})();
(function () {
  var Controller = function Controller($scope) {
    $scope.filterOptionName = Object.keys($scope.filterOption)[0];
    $scope.filterOn = $scope.filterOption[$scope.filterOptionName];

    $scope.clickFilterOptionCheckbox = function () {
      $scope.filterOption[$scope.filterOptionName] = !$scope.filterOption[$scope.filterOptionName];
      $scope.filterOn = $scope.filterOption[$scope.filterOptionName];

      //        $scope.safeApply();
      $scope.$emit('filterChange');
    };
  };

  define('ny_times/src/directives/ny_times_filter_type_option/controller', [], function () {
    Controller.$inject = ["$scope"];
    return Controller;
  });
})();
(function () {
  define('ny_times/src/directives/ny_times_filter_type_option/template', [], function () {
    return "" + "<div class='ny-time-filter-type-option' ng-show='showAllOptions || filterOn'>" + "<input type='checkbox' ng-click='clickFilterOptionCheckbox()' ng-model='filterOn'>" + "{{filterOptionName}}" + "</div>";
  });
})();
(function () {
  var NYTimesFilterTypeOption = function NYTimesFilterTypeOption() {
    return {
      restrict: "E",
      replace: true,
      scope: {
        showAllOptions: '=',
        filterOption: '='
      },
      controller: NYTimesFilterTypeOption.Controller,
      //link: NYTimesFilterTypeOption.Link,
      template: NYTimesFilterTypeOption.Template
    };
  };

  define('ny_times/src/directives/ny-times-filter-type-option.js', ["./ny_times_filter_type_option/controller",
  //"./ny_times_filter_type_option/link",
  "./ny_times_filter_type_option/template"], function (Controller,
  //Link,
  Template) {
    NYTimesFilterTypeOption.Controller = Controller;
    //NYTimesFilterTypeOption.Link = Link;
    NYTimesFilterTypeOption.Template = Template;
    NYTimesFilterTypeOption.NAME = "nyTimesFilterTypeOption";
    return NYTimesFilterTypeOption;
  });
})();
(function () {
  var Controller = function Controller($scope) {
    $scope.showAllOptions = false;
    $scope.showDefaultOptions = true;

    $scope.showAllFilterOptions = function () {
      $scope.showAllOptions = true;
      $scope.showDefaultOptions = false;
    };

    $scope.showLessFilterOptions = function () {
      $scope.showAllOptions = false;
    };
  };

  define('ny_times/src/directives/ny_times_filter_type/controller', [], function () {
    Controller.$inject = ["$scope"];
    return Controller;
  });
})();
(function () {
  define('ny_times/src/directives/ny_times_filter_type/template', [], function () {
    return "" + "<div class='ny-times-filter-type'>" + "<h3>{{filterType}}:</h3>" + "<div class='row ny-times-filter-options'>" + "<div class='ny-time-filter-type-option-repeater col-xs-3' ng-show='showAllOptions || filterOptionValue' ng-repeat='(filterOption, filterOptionValue) in filterOptions' class='ny-times-filter-option'>" + "<ny-times-filter-type-option show-all-options='showAllOptions' filter-option='filterOptionValue'></ny-times-filter-type-option>" + "</div>" + "</div>" + "<div>" + "<a class='ny-times-filter-options-show-all' ng-hide='showAllOptions' ng-click='showAllFilterOptions()'>" + "show all" + "</a>" + "<a class='ny-times-filter-options-show-all' ng-show='showAllOptions' ng-click='showLessFilterOptions()'>" + "show less" + "</a>" + "</div>" + "</div>";
  });
})();
(function () {
  var NYTimesFilterType = function NYTimesFilterType() {
    return {
      restrict: "E",
      replace: true,
      scope: {
        filterOptions: '=',
        filterType: '@'
      },
      controller: NYTimesFilterType.Controller,
      //link: NYTimesFilterType.Link,
      template: NYTimesFilterType.Template
    };
  };

  define('ny_times/src/directives/ny-times-filter-type', ["./ny_times_filter_type/controller",
  //"./ny_times_filter_type/link",
  "./ny_times_filter_type/template"], function (Controller,
  //Link,
  Template) {
    NYTimesFilterType.Controller = Controller;
    //NYTimesFilter.Link = Link;
    NYTimesFilterType.Template = Template;
    NYTimesFilterType.NAME = "nyTimesFilterType";
    return NYTimesFilterType;
  });
})();
(function () {
  var Controller = function Controller($scope, FILTER_CONSTANTS) {
    $scope.applyEmptyStoryTextFilterClass = { 'active-option-on': true, 'active-option-off': false };
    $scope.applyStoryTextContainsQueryFilterClass = { 'active-option-on': true, 'active-option-off': false };
    $scope.applyByLineContainsQueryFilterClass = { 'active-option-on': true, 'active-option-off': false };

    $scope.clickFilterOptionClick = function (state, modelName) {
      var filterClassName = FILTER_CONSTANTS[modelName] + 'Class';
      var filterModelName = FILTER_CONSTANTS[modelName];

      if (FILTER_CONSTANTS[state] === FILTER_CONSTANTS.TURN_FILTER_ON) {
        $scope[filterClassName] = { 'active-option-on': true, 'active-option-off': false };
        $scope[filterModelName] = true;
      } else {
        $scope[filterClassName] = { 'active-option-on': false, 'active-option-off': true };
        $scope[filterModelName] = false;
      }

      $scope.$emit('filterChange');
    };
  };

  define('ny_times/src/directives/ny_times_filter/controller', [], function () {
    Controller.$inject = ["$scope", 'FILTER_CONSTANTS'];
    return Controller;
  });
})();
(function () {
  define('ny_times/src/directives/ny_times_filter/template', [], function () {
    return "" + "<div class='ny-times-filter'>" + "<div class='ny-times-filter-types' >" + "<div class='ny-times-filter-type'> " + "<h3>Empty Story:</h3>" + "<div class='ny-times-filter-on-off-container'>" + "<span class='ny-times-filter-on active-option-on' ng-class='applyEmptyStoryTextFilterClass' ng-click=\"clickFilterOptionClick('TURN_FILTER_ON', 'STORY_TEXT_EMPTY_FILTER_NAME')\">on</span>" + "<span class='ny-times-filter-off active-option-on' ng-class='applyEmptyStoryTextFilterClass' ng-click=\"clickFilterOptionClick('TURN_FILTER_OFF', 'STORY_TEXT_EMPTY_FILTER_NAME')\">off</span>" + "</div>" + "</div>" + "<div class='ny-times-filter-type'> " + "<h3>Story Contains Query:</h3>" + "<div class='ny-times-filter-on-off-container'>" + "<span class='ny-times-filter-on active-option-on' ng-class='applyStoryTextContainsQueryFilterClass' ng-click=\"clickFilterOptionClick('TURN_FILTER_ON', 'STORY_TEXT_CONTAINS_QUERY_NAME')\">on</span>" + "<span class='ny-times-filter-off active-option-on' ng-class='applyStoryTextContainsQueryFilterClass' ng-click=\"clickFilterOptionClick('TURN_FILTER_OFF', 'STORY_TEXT_CONTAINS_QUERY_NAME')\">off</span>" + "</div>" + "</div>" + "<div class='ny-times-filter-type'> " + "<h3>Byline Contains Query:</h3>" + "<div class='ny-times-filter-on-off-container'>" + "<span class='ny-times-filter-on active-option-on' ng-class='applyByLineContainsQueryFilterClass' ng-click=\"clickFilterOptionClick('TURN_FILTER_ON', 'STORY_BYLINE_CONTAINS_QUERY_NAME')\">on</span>" + "<span class='ny-times-filter-off active-option-on' ng-class='applyByLineContainsQueryFilterClass' ng-click=\"clickFilterOptionClick('TURN_FILTER_OFF', 'STORY_BYLINE_CONTAINS_QUERY_NAME')\">off</span>" + "</div>" + "</div>" + "<div><ny-times-filter-type filter-options='newsDeskFilters' filter-type='{{newsDeskFilterName}}'></ny-times-filter-type></div>" + "<div><ny-times-filter-type filter-options='typeOfMaterialFilters' filter-type='{{typeOfMaterialFilterName}}'></ny-times-filter-type></div>" + "</div>" + "</div>";
  });
})();
(function () {
  var NYTimesFilter = function NYTimesFilter() {
    return {
      restrict: "E",
      replace: true,
      /*scope:{
          typeOfMaterialOptions: '=',
      },*/
      controller: NYTimesFilter.Controller,
      //link: NYTimesFilter.Link,
      template: NYTimesFilter.Template
    };
  };

  define('ny_times/src/directives/ny-times-filter', ["./ny_times_filter/controller",
  //"./ny_times_filter/link",
  "./ny_times_filter/template"], function (Controller,
  //Link,
  Template) {
    NYTimesFilter.Controller = Controller;
    //NYTimesFilter.Link = Link;
    NYTimesFilter.Template = Template;
    NYTimesFilter.NAME = "nyTimesFilter";
    return NYTimesFilter;
  });
})();
(function () {
  define('ny_times/src/directives/ny_times_sidebar/template', [], function () {
    return "" + "<div class='hidden-xs col-sm-2 ny-times-side-control sidebar'>" + "<ul class='sidebar-navs'>" + "<li ng-class='nyTimesStoryFeedNavClass' class='sidebar-nav-option' ng-click='showNYTimesContainerClick(\"nyTimesStoryFeed\")'>" + "<h3 class='hidden-sm'>Story Feed</h3>" + "<span class='visible-sm'>Story Feed</span>" + "</li>" + "<li ng-class='nyTimesStoryFilterNavClass' class='sidebar-nav-option' ng-click='showNYTimesContainerClick(\"nyTimesFilterContainer\")'>" + "<h3 class='hidden-sm'>Filter</h3>" + "<div class='visible-sm'>Filter</div>" + "</li>" + "</ul>" + "</div>";
  });
})();
(function () {
  var NYTimesSidebar = function NYTimesSidebar() {
    return {
      restrict: "E",
      replace: true,
      //            controller: NYTimesSidebar.Controller,
      //            link: NYTimesSidebar.Link,
      template: NYTimesSidebar.Template
    };
  };

  define('ny_times/src/directives/ny-times-sidebar', [
  //        "./ny_times_sidebar/controller",
  //        "./ny_times_sidebar/link",
  "./ny_times_sidebar/template"], function (
  //        Controller, 
  //        Link, 
  Template) {
    //        NYTimesSidebar.Controller = Controller;
    //        NYTimesSidebar.Link = Link;
    NYTimesSidebar.Template = Template;
    NYTimesSidebar.NAME = "nyTimesSidebar";
    return NYTimesSidebar;
  });
})();
(function () {
  var Controller = function Controller($scope, $filter, STORY_CONSTANTS) {
    //        $scope.title = "Headline "+"#" + $scope.index +": ";
    $scope.subTitle = $scope.story.headline.main;
    $scope.nyTimesLeadParagraphClass = { 'ny-times-story-lead-paragraph': true, 'clip-paragraph': true };

    $scope.hideNYTimesStory = false;
    $scope.showMoreNYTimesStory = false;

    $scope.source = '';
    $scope.pub_date = '';
    $scope.byline = '';
    $scope.type_of_material = '';
    $scope.news_desk = '';

    $scope.showMoreNYTimesStoryCick = function () {
      $scope.nyTimesLeadParagraphClass['clip-paragraph'] = false;
      $scope.showMoreNYTimesStory = true;
    };

    $scope.updateHideNYTimesStory = function () {
      $scope.hideNYTimesStory = $scope.storyHasActiveFilter()($scope.story);
    };

    //@todo cleanup this group of watches to only use one watch?
    $scope.$watch('story.typeOfMaterialFilter', $scope.updateHideNYTimesStory);
    $scope.$watch('story.newsDeskFilter', $scope.updateHideNYTimesStory);
    $scope.$watch('story.emptyStoryTextFilter', $scope.updateHideNYTimesStory);
    $scope.$watch('story.storyTextContainsQueryFilter', $scope.updateHideNYTimesStory);
    $scope.$watch('story.storyBylineContainsQueryFilter', $scope.updateHideNYTimesStory);

    $scope.getNYTimesImageUrl = function () {

      if (!$scope.story && !$scope.story.multimedia && !$scope.story.multimedia[0]) {
        return "";
      }

      var imageUrl = null;

      $scope.story.multimedia.forEach(function (media) {
        if (!imageUrl && media.type === "image") {
          imageUrl = "http://nytimes.com/" + media.url;
        }
      });

      return imageUrl;
    };

    function validPublicationDate(pubDate) {
      return pubDate === '';
    }

    function getPublicationDate(pubDate) {
      if (validPublicationDate($scope.story.pub_date)) {
        return STORY_CONSTANTS.UNKOWN_STORY_CONTENT_VALUE;
      }

      //@todo Make pubdate look nice
      pubDate = $filter('date')(pubDate, 'MM-dd-yyyy');

      return pubDate;
    }

    function prepStoryForDisplay() {
      $scope.showStorySnippit = !$scope.story.snippit || $scope.story.snippit === $scope.story.lead_paragraph ? false : true;
      $scope.source = !$scope.story.source || $scope.story.source === '' ? STORY_CONSTANTS.UNKOWN_STORY_CONTENT_VALUE : $scope.story.source;
      $scope.pub_date = getPublicationDate($scope.story.pub_date);
      $scope.byline = !$scope.story.byline || $scope.story.byline.original === '' ? STORY_CONSTANTS.UNKOWN_STORY_CONTENT_VALUE : $scope.story.byline.original;
      $scope.type_of_material = !$scope.story.type_of_material || $scope.story.type_of_material === '' ? STORY_CONSTANTS.UNKOWN_STORY_CONTENT_VALUE : $scope.story.type_of_material;
      $scope.news_desk = !$scope.story.news_desk || $scope.story.news_desk === '' ? STORY_CONSTANTS.UNKOWN_STORY_CONTENT_VALUE : $scope.story.news_desk;
    }

    //run updateHideNYTimesStory on load.
    $scope.updateHideNYTimesStory();
    //run prepStoryForDisplay on load
    prepStoryForDisplay();
  };

  define('ny_times/src/directives/ny_times_story/controller', [], function () {
    Controller.$inject = ["$scope", '$filter', 'STORY_CONSTANTS'];
    return Controller;
  });
})();

(function (global) {
  var Link = function Link(scope, element) {

    element.on('$destroy', function () {});
  };

  define('ny_times/src/directives/ny_times_story/link', ["angular"], function (angular) {
    Link.angular = angular;
    Link.document = global.document;
    return Link;
  });
})(window);
(function () {
  define('ny_times/src/directives/ny_times_story/template', [], function () {
    return "" + "<div>" + "<div class='container-fluid ny-times-story' ng-hide='hideNYTimesStory'>" +
    //"<h1>" +
    //	"{{title}}" +
    //"</h1>" +

    "<h1>" + "{{subTitle}}" + "</h1>" +

    //"<strong>Lead Paragraph</strong>" +
    "<p ng-class='nyTimesLeadParagraphClass'>" + "{{story.lead_paragraph}}" + "</p>" + "<div ng-hide='showMoreNYTimesStory' ng-class='nyTimesStorySeeMore'>" + "<a ng-click='showMoreNYTimesStoryCick()'>See More</a>" + "</div>" + "<div ng-show='showMoreNYTimesStory'>" + "<div class='ny-times-story-content-row row'>" + "<div class='col-xs-8'>" + "<div ng-show='showStorySnippit'>" + "<strong>Story Snippet:</strong>" + "{{story.snippet}}" + "</div>" +

    //"<strong>abstract</strong>" +
    //"<div>" +
    //	"{{story.abstract}}" +
    //"</div>" +


    "<div class='ny-times-story-source' ng-hide=\"story.source !== ''\">" + "<strong>Source:</strong>" + "{{source}}" + "</div>" + "<strong>Publication Date</strong>" + "<div>" + "{{pub_date}}" + "</div>" + "<strong>Byline</strong>" + "<div>" + "{{byline}}" + "</div>" + "<strong>Type Of Material</strong>" + "<div>" + "{{type_of_material}}" + "</div>" + "<strong>New Desk</strong>" + "<div>" + "{{news_desk}}" + "</div>" + "</div>" + "<div class='ny-times-story-content-img col-xs-4'><img ng-src='{{getNYTimesImageUrl()}}' /></div>" + "</div>" + "</div>" + "</div>" + "</div>";
  });
})();
(function () {
  var NYTimesStory = function NYTimesStory() {
    return {
      restrict: "E",
      replace: true,
      scope: {
        story: '=',
        index: '@',
        page: '@',
        storyHasActiveFilter: '&',
        applyTypeOfMaterialFilter: '=',
        applyNewsDeskFilter: '=',
        applyEmptyStoryTextFilter: '=',
        applyStoryTextContainsQueryFilter: '=',
        applyByLineContainsQueryFilter: '='
      },
      controller: NYTimesStory.Controller,
      link: NYTimesStory.Link,
      template: NYTimesStory.Template
    };
  };

  define('ny_times/src/directives/ny-times-story', ["./ny_times_story/controller", "./ny_times_story/link", "./ny_times_story/template"], function (Controller, Link, Template) {
    NYTimesStory.Controller = Controller;
    NYTimesStory.Link = Link;
    NYTimesStory.Template = Template;
    NYTimesStory.NAME = "nyTimesStory";
    return NYTimesStory;
  });
})();
(function (global) {
  var Directives = function Directives(module) {
    global.angular.forEach(Directives.list, function (directive) {
      module.directive(directive['NAME'], directive);
    });
  };

  define('ny_times/src/directives', ["./directives/infinite-scroller", "./directives/ny-times-feed", "./directives/ny-times-filter-type-option.js", "./directives/ny-times-filter-type", "./directives/ny-times-filter", "./directives/ny-times-sidebar", "./directives/ny-times-story"], function (InfiniteScroller, NYTimesFeed, NYTimesFilterTypeOption, NYTimesFilterType, NYTimesFilter, NYTimesSidebar, NYTimesStory) {
    Directives.list = arguments;
    return Directives;
  });
})(window);
(function () {
  function defaultErrorCallback(message) {
    throw new Error(message);
  }

  var Services = function Services(module) {
    var angular = Services.angular;

    module.factory("$cbtErrors", ["$cbtOptions", function ($cbtOptions) {
      var onErrorCallback = $cbtOptions.getOnErrorCallback();
      onErrorCallback = angular.isFunction(onErrorCallback) ? onErrorCallback : defaultErrorCallback;

      function errorCallback(code, msg) {
        var info = "[Error " + code + "] " + msg;
        onErrorCallback(info, code);
      }

      var self = {};

      return self;
    }]);
  };

  define('ny_times/src/services', ["angular"], function (angular) {
    Services.angular = angular;
    return Services;
  });
})();
(function () {
  var Values = function Values(module) {};

  define('ny_times/src/values', [], function () {
    return Values;
  });
})();
(function () {
  var Filters = function Filters(module) {
    //module.filter(Filters.TotalTimeDisplay.NAME, Filters.TotalTimeDisplay);
  };

  define('ny_times/src/filters', [
    //    "./filters/some_filter",
  ], function ()
  //SomeFilter
  {
    //Filters.SomeFilter = SomeFilter;
    return Filters;
  });
})();
(function (global) {
  var NYTimes = function NYTimes(options) {
    var angular = NYTimes.angular;

    NYTimes.TemplateRenderer(options);

    var module = angular.module(NYTimes.MODULE, NYTimes.MODULE_DEPENDENCIES);
    module.constant("$mainOptions", options);

    module.config(['$provide', function ($provide) {
      return $provide.decorator('$rootScope', ['$delegate', function ($delegate) {
        $delegate.safeApply = function (fn) {
          var phase = $delegate.$$phase;
          if (phase === "$apply" || phase === "$digest") {
            if (fn && typeof fn === 'function') {
              fn();
            }
          } else {
            $delegate.$apply(fn);
          }
        };
        return $delegate;
      }]);
    }]);

    module.provider("$exceptionHandler", function () {
      return {
        $get: function $get() {
          return function (exception, cause) {
            try {
              if (typeof console !== "undefined") {
                if (console && console.log) {
                  console.log("[ERROR: angular.$exceptionHandler()]");
                  console.log("exception: ", exception);
                  console.log("exception.message: " + exception.message);
                  console.log("exception.stack: " + exception.stack);
                  console.log("cause: " + cause);
                  console.log("[ERROR: END]");
                }
              }
            } catch (e) {}
          };
        }
      };
    });

    NYTimes.Constants(module);
    NYTimes.Controllers(module);
    NYTimes.Directives(module);
    NYTimes.Filters(module);
    NYTimes.Services(module);
    NYTimes.Values(module);

    var element = NYTimes.document.querySelector(options.getMainElementSelector());
    var target = angular.element(element);

    //angular.bootstrap(element, [NYTimes.MODULE]);


    //get the api defined in the main_ctrl controller object.
    //var mainApi = angular.element(target[0].childNodes[0]).controller();
    return {}; //mainApi;


    /*var nyTimesApi = {
       getApi: function getApi() {
        var mainApi = angular.element(target[0].childNodes[0]).controller().getApi();
        return mainApi;
      },
     };
     return nyTimesApi;
    */
  };

  define('ny_times/boot', ["angular", "./src/template-renderer", "./src/constants", "./src/controllers", "./src/directives", "./src/services", "./src/values", "./src/filters", "./src/controllers/main-ctrl"], function (angular, TemplateRenderer, Constants, Controllers, Directives, Services, Values, Filters, MainCtrl) {

    NYTimes.MODULE = "NYTimesApp";
    NYTimes.MODULE_DEPENDENCIES = [];

    NYTimes.document = global.document;
    NYTimes.angular = angular;
    NYTimes.TemplateRenderer = TemplateRenderer;
    NYTimes.Constants = Constants;
    NYTimes.Controllers = Controllers;
    NYTimes.Directives = Directives;
    NYTimes.Services = Services;
    NYTimes.Values = Values;
    NYTimes.Filters = Filters;
    NYTimes.MainCtrl = MainCtrl;

    return NYTimes;
  });
})(window);

(function () {
  var Boot = function Boot(options) {
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

  define('ny_times/boot-runner', ["./boot"], function (booter) {
    Boot.booter = booter;
    return Boot;
  });
})();

(function () {
  var NYTimes = function NYTimes(options) {
    var NYTimesOptions = NYTimes.Options(options);
    var boot = NYTimes.Boot(NYTimesOptions);
    return boot.getMainAPI();
  };

  define('ny-times', ["./ny_times/options", "./ny_times/boot-runner"], function (Options, Boot) {
    NYTimes.Options = Options;
    NYTimes.Boot = Boot;
    return NYTimes;
  });
})();
