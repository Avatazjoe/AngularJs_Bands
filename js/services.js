// SERVICES
bandsApp.service('cityService', function () {

    this.city = "Madrid";

});


bandsApp.service('bandService', ['$resource', '$location', function($resource, $location){


    this.GetBand = function(band){

        var bandApi = $resource("https://es.wikipedia.org/w/api.php", {

            callback: "JSON_CALLBACK"}, {get: {method: "JSONP"}});

        return bandApi.get({ format:'json', action: 'query', prop: 'extracts', exintro: 'explaintext', titles: band });


    };

}]);
