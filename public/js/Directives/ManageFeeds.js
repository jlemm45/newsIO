angular.module('managefeedscomponent', ['snugfeed.service.feeds']).directive('managefeedscomponent', function(snugfeedFeedsService) {

    function link(scope, element, attrs) {
        snugfeedFeedsService.getFeeds().then(function(data) {
            scope.feeds = data.data;
        });

        scope.activateFeed = function(feed) {
            feed.active = feed.active ? false : true;
            scope.data = scope.feeds;
        };
    }

    return {
        link: link,
        restrict: 'E',
        scope: {data: '='},
        template: '' +
        '<div class="ui segment" id="manage-feeds-component">' +
            '<div class="ui eight column grid">' +
                '<div class="column" ng-repeat="feed in feeds" ng-click="activateFeed(feed)" ng-class="{\'active\': feed.active}">' +
                    '<div class="overlay" ng-show="feed.active">' +
                        '<i class="checkmark icon"></i>' +
                    '</div>' +
                    '<img ng-src="https://s3-us-west-2.amazonaws.com/news-io/icons/{{feed.icon_name}}.png">' +
                '</div>' +
            '</div>' +
        '</div>'
    };
});