(function () {
  var Controller = function ($scope, $filter, STORY_CONSTANTS) {
//        $scope.title = "Headline "+"#" + $scope.index +": ";
        $scope.subTitle                     = $scope.story.headline.main;
        $scope.nyTimesLeadParagraphClass    = {'ny-times-story-lead-paragraph':true, 'clip-paragraph':true};

        $scope.hideNYTimesStory             = false;
        $scope.showMoreNYTimesStory         = false;

        $scope.source                       = '';
        $scope.pub_date                     = '';
        $scope.byline                       = '';
        $scope.type_of_material             = '';
        $scope.news_desk                    = '';



        $scope.showMoreNYTimesStoryCick = function () {
            $scope.nyTimesLeadParagraphClass['clip-paragraph']=false;
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
            
            if(!$scope.story && !$scope.story.multimedia && !$scope.story.multimedia[0]){
                return "";
            }

            let imageUrl = null;

            $scope.story.multimedia.forEach(function (media) {
                if(!imageUrl && media.type==="image"){
                    imageUrl = "http://nytimes.com/"+media.url;
                }
            });

            return imageUrl;
        };

        function validPublicationDate(pubDate){
            return pubDate === '';
        }

        function getPublicationDate(pubDate){
            if(validPublicationDate($scope.story.pub_date)){
                return STORY_CONSTANTS.UNKOWN_STORY_CONTENT_VALUE;
            }

            //@todo Make pubdate look nice
            pubDate = $filter('date')(pubDate, 'MM-dd-yyyy');

            return pubDate;
        }

        function prepStoryForDisplay() {
            $scope.showStorySnippit = !$scope.story.snippit || $scope.story.snippit === $scope.story.lead_paragraph ? false:true;
            $scope.source = !$scope.story.source || $scope.story.source === '' ? STORY_CONSTANTS.UNKOWN_STORY_CONTENT_VALUE:$scope.story.source;
            $scope.pub_date = getPublicationDate($scope.story.pub_date);
            $scope.byline = !$scope.story.byline || $scope.story.byline.original === '' ? STORY_CONSTANTS.UNKOWN_STORY_CONTENT_VALUE:$scope.story.byline.original;
            $scope.type_of_material = !$scope.story.type_of_material || $scope.story.type_of_material === '' ? STORY_CONSTANTS.UNKOWN_STORY_CONTENT_VALUE:$scope.story.type_of_material;
            $scope.news_desk = !$scope.story.news_desk || $scope.story.news_desk === '' ? STORY_CONSTANTS.UNKOWN_STORY_CONTENT_VALUE:$scope.story.news_desk;
        }

        //run updateHideNYTimesStory on load.
        $scope.updateHideNYTimesStory();
        //run prepStoryForDisplay on load
        prepStoryForDisplay();
  };

  define([], function () {
    Controller.$inject = ["$scope", '$filter', 'STORY_CONSTANTS'];
    return Controller;
  });
}());


