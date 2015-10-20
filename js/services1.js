

// SERVICES

//$http({url: 'http://es.wikipedia.org/w/api.php?action=query&titles=' + band + '&list=random&rnlimit=1&rawcontinue&format=json&callback=JSON_CALLBACK', method: 'jsonp'}).

//API call service
bandsApp.service('bandService', ['$http', function($http){

this.response;
this.GetBand = function(band){

$http({
url: 'http://es.wikipedia.org/w/api.php?action=query&titles=' + band + '&list=random&rnlimit=1&rawcontinue&format=json&callback=JSON_CALLBACK',
method: 'jsonp'
}).success(function(response) {
console.log(response);
this.response = response;
});
}

}]);