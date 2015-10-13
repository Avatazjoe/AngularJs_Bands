// SERVICES

//API call service
bandsApp.service('bandService', ['$http', '$q', function($http, $q){

    var Cache = [];

    var getBand = {

        get: function(band) {

            if(Cache[band]){
                return Cache[band];
            } else {
                Cache[band] = $http.jsonp('http://es.wikipedia.org/w/api.php?titles=' + band + '&rawcontinue=true&action=query&format=json&prop=extracts&callback=JSON_CALLBACK');
                return Cache[band];
            }
        }
    };

    return getBand;


}]);
