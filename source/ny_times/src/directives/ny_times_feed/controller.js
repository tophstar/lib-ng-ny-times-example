(function () {
  var Controller = function ($scope, $http, $mainOptions, $timeout) {

    var nyTimesQuery                          = $mainOptions.getDefaultNYTimesQuery().toLowerCase();
    $scope.currentTotalUnfilterCount          = 0;
    $scope.totalFilteredCount                 = 0;
    $scope.totalStoryCount                    = 0;
    $scope.totalUnfilteredStoryCount          = 0;

    $scope.showNYTimesStoryFeedContainer      = true;
    $scope.showNYTimesFilterContainer         = false;
    $scope.nyTimesStoryFeedNavClass           = {'active-nav':true};
    $scope.nyTimesStoryFilterNavClass         = {};

    $scope.applyTypeOfMaterialFilter          = true;
    $scope.typeOfMaterialFilterName           = "Type Of Materials";
    $scope.typeOfMaterialFilterDefaults       = ["timestopic", "Paid Death Notice", "Obituary"];
    $scope.typeOfMaterialFilters              = [{"Addendum":false},{"An Analysis":false},{"An Appraisal":false},
      {"Article":false},{"Banner":false},{"Biography":false},{"Birth Notice":false},{"Blog":false},{"Brief":false},
      {"Caption":false},{"Chronology":false},{"Column":false},{"Correction":false},{"Economic Analysis":false},
      {"Editorial":false},{"Editorial Cartoon":false},{"Editors' Note":false},{"First Chapter":false},
      {"Front Page":false},{"Glossary":false},{"Interactive Feature":false},{"Interactive Graphic":false},
      {"Interview":false},{"Letter":false},{"List":false},{"Marriage Announcement":false},{"Military Analysis":false},
      {"News":false},{"News Analysis":false},{"Newsletter":false},{"Obituary":false},{"Obituary (Obit)":false},
      {"Op-Ed":false},{"Paid Death Notice":false},{"Postscript":false},{"Premium":false},{"Question":false},{"Quote":false},
      {"Recipe":false},{"Review":false},{"Schedule":false},{"SectionFront":false},{"Series":false},{"Slideshow":false},
      {"Special Report":false},{"Statistics":false},{"Summary":false},{"Text":false},{'timestopic':false},{"Video":false},
      {"Web Log":false}
    ];



/*    $scope.typeOfMaterialsOptions             = ["Addendum","An Analysis","An Appraisal","Article","Banner","Biography",
            "Birth Notice","Blog","Brief","Caption","Chronology","Column","Correction","Economic Analysis",
            "Editorial","Editorial Cartoon","Editors' Note","First Chapter","Front Page","Glossary","Interactive Feature",
            "Interactive Graphic","Interview","Letter","List","Marriage Announcement","Military Analysis","News",
            "News Analysis","Newsletter","Obituary","Obituary (Obit)","Op-Ed","Paid Death Notice",
            "Postscript","Premium","Question","Quote","Recipe","Review","Schedule","SectionFront",
            "Series","Slideshow","Special Report","Statistics","Summary","Text","timestopic", "Video","Web Log"];
*/



    $scope.applyNewsDeskFilter                = true;
    $scope.newsDeskFilterName                 = "News Desk";
    $scope.newsDeskFilterDefaults             = ["Games"];
    $scope.newsDeskFilters                    = [{"Adventure Sports":false},{"Arts & Leisure":false},{"Arts":false},
      {"Automobiles":false},{"Blogs":false},{"Books":false},{"Booming":false},{"Business Day":false},
      {"Business":false},{"Cars":false},{"Circuits":false},{"Classifieds":false},{"Connecticut":false},
      {"Crosswords & Games":false},{"Culture":false},{"DealBook":false},{"Dining":false},{"Editorial":false},
      {"Education":false},{"Energy":false},{"Entrepreneurs":false},{"Environment":false},{"Escapes":false},
      {"Fashion & Style":false},{"Fashion":false},{"Favorites":false},{"Financial":false},{"Flight":false},{"Food":false},
      {"Foreign":false},{"Generations":false},{"Games":false},{"Giving":false},{"Global Home":false},{"Health & Fitness":false},
      {"Health":false},{"Home & Garden":false},{"Home":false},{"Jobs":false},{"Key":false},{"Letters":false},
      {"Long Island":false},{"Magazine":false},{"Market Place":false},{"Media":false},{"Men's Health":false},{"Metro":false},
      {"Metropolitan":false},{"Movies":false},{"Museums":false},{"National":false},{"Nesting":false},{"Obits":false},
      {"Obituaries":false},{"Obituary":false},{"OpEd":false},{"Opinion":false},{"Outlook":false},{"Personal Investing":false},
      {"Personal Tech":false},{"Play":false},{"Politics":false},{"Regionals":false},{"Retail":false},
      {"Retirement":false},{"Science":false},{"Small Business":false},{"Society":false},{"Sports":false},{"Style":false},
      {"Sunday Business":false},{"Sunday Review":false},{"Sunday Styles":false},{"T Magazine":false},{"T Style":false},
      {"Technology":false},{"Teens":false},{"Television":false},{"The Arts":false},{"The Business of Green":false},
      {"The City Desk":false},{"The City":false},{"The Marathon":false},{"The Millennium":false},{"The Natural World":false},
      {"The Upshot":false},{"The Weekend":false},{"The Year in Pictures":false},{"Theater":false},{"Then & Now":false},
      {"Thursday Styles":false},{"Times Topics":false},{"Travel":false},{"U.S.":false},{"Universal":false},
      {"Upshot":false},{"UrbanEye":false},{"Vacation":false},{"Washington":false},{"Wealth":false},{"Weather":false},
      {"Week in Review":false},{"Week":false},{"Weekend":false},{"Westchester":false},{"Wireless Living":false},
      {"Women's Health":false},{"Working":false},{"Workplace":false},{"World":false},{"Your Money":false}
    ];

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

    $scope.applyEmptyStoryTextFilter          = true;
    $scope.applyStoryTextContainsQueryFilter  = true;
    $scope.applyByLineContainsQueryFilter     = true;

    $scope.newsFeed                           = [];
    $scope.pagesLoaded                        = 0;
    $scope.throttleScroller                   = false;
    $scope.currentPage                        = 0;

    function applyFilterDefaults(filterArray, defaultArray) {
      filterArray.forEach(function (currentArrayItem) {
        var filterName = Object.keys(currentArrayItem)[0];
        if(defaultArray.indexOf(filterName) !== -1){
          currentArrayItem[filterName] = true;
        }
      });
    }

    applyFilterDefaults($scope.typeOfMaterialFilters, $scope.typeOfMaterialFilterDefaults);
    applyFilterDefaults($scope.newsDeskFilters, $scope.newsDeskFilterDefaults);

    function capitalize(s)
    {
        return s && s[0].toUpperCase() + s.slice(1);
    }

    function textHasSentanceWithFirstWordQuery(text) {
      if(!text){
        return false;
      }

      let aSentanceStartsWithQuery = false;
      let textArray = text.split(".");

      for(let i = 0; i < textArray.length; i++){
        let firstFiveLetters = capitalize(textArray[i].substring(0, 4).toLowerCase());

        if(firstFiveLetters.indexOf(capitalize(nyTimesQuery)) !== -1){
          aSentanceStartsWithQuery = true;
        }
      }

      return aSentanceStartsWithQuery;
    }

    function textContainsUncaplitalizedQuery(text){
      if(!text){
        return false;
      }

      return text.indexOf(nyTimesQuery.toLowerCase()) !== -1;
    }

    function bylineContainsQuery(story){
      if(!story || !story.byline || !story.byline.original){
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
    function filterByLineContainsQuery(story){
      let leadParagraphHasQuery = textContainsUncaplitalizedQuery(story.lead_paragraph);
      let snippitHasQuery = textContainsUncaplitalizedQuery(story.lead_paragraph);
      let headlineHasQuery = textContainsUncaplitalizedQuery(story.lead_paragraph);

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
    function filterContainsQuery(story){
      let leadParagraphHasQuery = textHasSentanceWithFirstWordQuery(story.lead_paragraph) || textContainsUncaplitalizedQuery(story.lead_paragraph);
      let snippitHasQuery = textHasSentanceWithFirstWordQuery(story.lead_paragraph) || textContainsUncaplitalizedQuery(story.lead_paragraph);
      let headlineHasQuery = textHasSentanceWithFirstWordQuery(story.lead_paragraph) || textContainsUncaplitalizedQuery(story.lead_paragraph);

      return leadParagraphHasQuery || snippitHasQuery || headlineHasQuery;
    }


    function matchArrayItem(filterArray, text){
      let itemMatch = false;
      
      filterArray.forEach(function(filter){
        let filterName = Object.keys(filter)[0];
        if(filter[filterName] && text === filterName) {
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

    function filterNewsDesk(story){
      return matchArrayItem($scope.newsDeskFilters, story.news_desk);
    }

    function filterEmptyText(text){
      return !!text && text !== "";
    }

    function filterStoryTexts(story){
      return filterEmptyText(story.lead_paragraph) || filterEmptyText(story.snippit) || filterEmptyText(story.headline.main);
    }



    function addTypeOfMaterialFilter(story){
      story.typeOfMaterialFilter = false;

      if(filterTypeOfMaterial(story)){
        story.typeOfMaterialFilter = true;
      }
    }

    function addNewsDeskFilter(story){
      story.newsDeskFilter = false;

      if(filterNewsDesk(story)){
        story.newsDeskFilter = true;
      }
    }

    function addEmptyStoryTextFilter(story){
      story.emptyStoryTextFilter = false;

      if($scope.applyEmptyStoryTextFilter && !filterStoryTexts(story)){
        story.emptyStoryTextFilter = true;
      }
    }

    function addStoryTextContainsQueryFilter(story){
      story.storyTextContainsQueryFilter = false;

      if($scope.applyStoryTextContainsQueryFilter && !filterContainsQuery(story)){
        story.storyTextContainsQueryFilter = true;
      }
    }

    function addBylineContainsQueryFilter(story){
      story.storyBylineContainsQueryFilter = false;

      if($scope.applyByLineContainsQueryFilter && !filterByLineContainsQuery(story)){
        story.storyBylineContainsQueryFilter = true;
      }
    }

    function addNYTimesStoryFilters(story, index){
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

    function isNewArrayElement(currentArray, newArrayItem){
      if(!newArrayItem || newArrayItem === ""){
        return false;
      }

      currentArray.forEach(function (currentArrayItem) {
        if(Object.keys(currentArrayItem)[0] === newArrayItem){
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

    function populateAdditionalFilterOptions(responseDocs){
      responseDocs.forEach(function (story){
        if(isNewArrayElement($scope.typeOfMaterialFilters, story.type_of_material)){
          var newTypeOfMaterial = {};
          newTypeOfMaterial[story.type_of_material] = false;
          $scope.typeOfMaterialFilters.push(newTypeOfMaterial);
        }
        if(isNewArrayElement($scope.newsDeskFilters, story.news_desk)){
          var newTypeOfNewsDesk = {};
          newTypeOfNewsDesk[story.news_desk] = false;
          $scope.newsDeskFilters.push(newTypeOfNewsDesk);
        }
      });
    }

    function filteredStoryCount(newsFeed) {
      let filteredStoryCount = 0;

      newsFeed.forEach(function (story) {
        if($scope.storyHasActiveFilter(story)){
          filteredStoryCount++;
        }
      });

      //@todo constant for 10
      return filteredStoryCount;
    }

    function addToFilteredStoryCount(newsFeed){
      let filteredCount = filteredStoryCount(newsFeed);
      $scope.totalFilteredCount += filteredCount;
      return filteredCount;
    }


    function addToNYTimesStoryCounts(newsFeed){

      let totalNYTimesFeedCount, currentFilteredStoryCount;

      totalNYTimesFeedCount = newsFeed.length;
      currentFilteredStoryCount = addToFilteredStoryCount(newsFeed);

      $scope.totalStoryCount += totalNYTimesFeedCount;
      $scope.totalUnfilteredStoryCount += totalNYTimesFeedCount - currentFilteredStoryCount;

      return currentFilteredStoryCount;
    }

    function calculateFilteredStoryCount(newsFeed){
      let filteredCount = filteredStoryCount(newsFeed);
      $scope.totalFilteredCount += filteredCount;
      return filteredCount;
    }

    function updateNYTimesStoryCounts(newsFeed){

      let totalNYTimesFeedCount, currentFilteredStoryCount;

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
    $scope.storyHasActiveFilter = function(story){
      let typeOfMaterialFilterState = story.typeOfMaterialFilter && $scope.applyTypeOfMaterialFilter;

      let newsDeskFilterState = story.newsDeskFilter && $scope.applyNewsDeskFilter;

      let emptyStoryTextFilterState = story.emptyStoryTextFilter && $scope.applyEmptyStoryTextFilter;

      let storyTextContainsQueryFilterState = story.storyTextContainsQueryFilter && $scope.applyStoryTextContainsQueryFilter;

      let storyBylineQueryFilterState = story.storyBylineContainsQueryFilter && $scope.applyByLineContainsQueryFilter;

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
        params:{
            'api-key': $mainOptions.getNYTimesApiKey(),
            'q': nyTimesQuery,
            'page': currentPage
        }
      }).then(function successCallback(response) {
        let filteredNYTimesFeed;
        let totalNYTimesFeedCount;
        let currentFilteredStoryCount;

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
        if($scope.currentTotalUnfilterCount < 10){
          $timeout($scope.getNYTimesFeed, 1500, true, $scope.pagesLoaded);
        }else{
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
        if($scope.throttleScroller){
            return true;
        }

        $scope.throttleScroller = true;
        $scope.getNYTimesFeed($scope.pagesLoaded);
    };



    $scope.showNYTimesContainerClick = function (clickedContainerOption) {
      let activeNav;

      activeNav = {'active-nav':true};

      $scope.showNYTimesFilterContainer = false;
      $scope.showNYTimesStoryFeedContainer = false;


      $scope.nyTimesStoryFeedNavClass = {};
      $scope.nyTimesStoryFilterNavClass = {};

      //@todo make nyTimesStoryFeed a constant
      if(clickedContainerOption === 'nyTimesStoryFeed'){
        $scope.showNYTimesStoryFeedContainer = true;
        $scope.nyTimesStoryFeedNavClass = activeNav;

      }
      else if(clickedContainerOption === 'nyTimesFilterContainer'){
        $scope.showNYTimesFilterContainer = true;
        $scope.nyTimesStoryFilterNavClass = activeNav;
      }
    };

    $scope.getNYTimesFeed(0);
  };

  define([], function () {
    Controller.$inject = ["$scope", "$http", "$mainOptions", "$timeout"];
    return Controller;
  });
}());