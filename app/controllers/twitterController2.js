angular.module('twitterApp')
    .controller('twitterController2', ['$scope', 'twitterFactory2', '$routeParams',
        function ($scope, twitterFactory2, $routeParams) {

    $scope.sortBy = 'name';
    $scope.reverse = false;
    $scope.profile;
    $scope.followers;
    $scope.screenName = $routeParams.screenName;
    var screenName = $scope.screenName;

    $scope.loadFollowers = function() {
    	twitterFactory2.getProfile(screenName).then(function(profile) {
    		$scope.profile = profile;
        });
    	twitterFactory2.getFollowers(screenName).then(function(followers) {
    		$scope.followers = followers;
        });
    };
    
    $scope.loadFollowers();
    
    $scope.doSort = function(propName) {
        $scope.sortBy = propName;
        $scope.reverse = !$scope.reverse;
     };
    
}]);