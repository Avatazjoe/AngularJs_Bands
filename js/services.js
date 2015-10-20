// SERVICES

//API call service
bandsApp.service('bandService', ['$http', '$q', function($http, $q){

    var cache = [];
    
    return {
        getBand: function(band) {
           
            //injecting band, getBand parameter, we define url 
            var url ='https://es.wikipedia.org/w/api.php?action=parse&page=' + band + '&format=json&prop=text&section=0&callback=JSON_CALLBACK';

            //using jsonp method and creating promise
            return $http.jsonp(url).then(function(response) {
                
                //filter data to get what we need
                response = response.data.parse.text;
                
                //check if response is an object
                if (typeof response === 'object') {
                    
                    //we check for cache data for this band
                    if(cache[band]){
                        
                        //if exists, we return it to save 
                        //ajax calls
                        return cache[band];
                        
                    } else{
                        
                        //if cache does not exist, response will be 
                        //the cache data for this band
                        cache[band] = response;
                        
                        //and return response 
                        return response;
                    }

                //if response is not an object    
                } else {
                    
                    // invalid response
                    return $q.reject(response);
                    
                }
                
            //wrong call
            }, function(response) {
                
                // something went wrong
                return $q.reject(response);
            });
        }
    };


}]);
