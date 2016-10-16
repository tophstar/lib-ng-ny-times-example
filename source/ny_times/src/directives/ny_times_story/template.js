(function () {
    define([], function () {
        return "" +
            "<div>" +
	            "<div class='container-fluid ny-times-story' ng-hide='hideNYTimesStory'>" +
					//"<h1>" +
					//	"{{title}}" +
					//"</h1>" +

					"<h1>" +
						"{{subTitle}}" +
					"</h1>" +

					//"<strong>Lead Paragraph</strong>" +
					"<p ng-class='nyTimesLeadParagraphClass'>" +
						"{{story.lead_paragraph}}" +
					"</p>" +

					"<div ng-hide='showMoreNYTimesStory' ng-class='nyTimesStorySeeMore'>" +
						"<a ng-click='showMoreNYTimesStoryCick()'>See More</a>" +
					"</div>" +

					"<div ng-show='showMoreNYTimesStory'>" +

						"<div class='ny-times-story-content-row row'>" +
							"<div class='col-xs-8'>" +

								"<div ng-show='showStorySnippit'>" +
									"<strong>Story Snippet:</strong>" +
									"{{story.snippet}}" +
								"</div>" +

								//"<strong>abstract</strong>" +
								//"<div>" +
								//	"{{story.abstract}}" +
								//"</div>" +
								

								"<div class='ny-times-story-source' ng-hide=\"story.source !== ''\">" +
									"<strong>Source:</strong>" +
									"{{source}}" +
								"</div>" +


								"<strong>Publication Date</strong>" +
								"<div>" +
									"{{pub_date}}" +
								"</div>" +

								"<strong>Byline</strong>" +
								"<div>" +
									"{{byline}}" +
								"</div>" +


								"<strong>Type Of Material</strong>" +
								"<div>" +
									"{{type_of_material}}" +
								"</div>" +

								"<strong>New Desk</strong>" +
								"<div>" +
									"{{news_desk}}" +
								"</div>" +
							"</div>" +
							"<div class='ny-times-story-content-img col-xs-4'><img ng-src='{{getNYTimesImageUrl()}}' /></div>" +
						"</div>" +
					"</div>" +
				"</div>" +
            "</div>";
    });
}());