angular.module('twitterApp')
    .controller('twitterController', ['$scope', 'twitterFactory2', '$routeParams',
        function ($scope, twitterFactory2, $routeParams) {

    $scope.sortBy = 'name';
    $scope.reverse = false;
    $scope.profile;
    $scope.followers;
    var keywords = {};
    $scope.keywords = [];
    $scope.screenName = $routeParams.screenName;
    var screenName = $scope.screenName;
    var stopwords = ['all','own','just','can','being','over','yourself','down','through','during','its','before','from','her','few','with','there','had','been','should','to','only','other','too','my','under','ours','themselves','has','was','into','more','do','them','his','an','which','than','on','very','am','in','but','were','they','not','yourselves','now','herself','him','nor','he','me','myself','did','off','having','im','whom','until','will','this','while','itself','those','she','each','where','at','and','because','then','doing','is','theirs','some','it','up','as','himself','are','have','our','further','ourselves','out','rt','these','what','for','no','that','when','below','same','your','how','does','above','between','you','if','t','be','we','after','again','any','why','who','here','most','hers','such','by','a','both','about','don','i','of','against','yours','their','s','so','the','or','once'];
    
    $scope.loadFollowers = function() {
    	twitterFactory2.getProfile(screenName).then(function(profile) {
    		$scope.profile = profile;
        });
    	twitterFactory2.getFollowers(screenName).then(function(followers) {
    		$scope.followers = followers;
    		/*for (f in followers) {
    			description = followers[f].description.split(" ");
    			for (d in description) {
    				try {
        				var desc = description[d];
        				if (desc != undefined) {
            				desc = desc.strip(); //.replace(".,","")
            				if (!(desc in stopwords)) {
                				if (desc in $scope.keywords) {
                					keywords[desc] =+ 1;
                				}  else {
                					keywords[desc] = 1;
                				}
            				}
        				}
    				} catch (Exception) {
    					//pass
    				}
    			}
    		}
    		var items = Object.keys(keywords).map(function(key) {
    		    return [key, keywords[key]];
    		});

    		// Sort the array based on the second element
    		items.sort(function(first, second) {
    		    return second[1] - first[1];
    		});
    		$scope.keywords = items;*/
        });
    };
    
    $scope.loadFollowers();
    
    $scope.doSort = function(propName) {
        $scope.sortBy = propName;
        $scope.reverse = !$scope.reverse;
     };
    
}]);