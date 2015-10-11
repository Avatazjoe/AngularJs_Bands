// SERVICES

bandsApp.service('bandService', ['$resource', '$location', function($resource, $location){

    //initialize an empty array for cache data
    this.cachedData = {};

    this.GetBand = function(band){

        //if requested band cache data exists, return cache data
        if(this.cachedData[band]){

            return this.cachedData[band];

        //else, call API, get data, and set band cache data
        } else{

            var bandApi = $resource("https://es.wikipedia.org/w/api.php", {

                callback: "JSON_CALLBACK"}, {get: {method: "JSONP"}});


            bandApi = bandApi.get({ format:'json', action: 'query', prop: 'extracts', exintro: 'explaintext', titles: band });

            this.cachedData[band] = bandApi;

            return bandApi;

        }

    };

}]);
