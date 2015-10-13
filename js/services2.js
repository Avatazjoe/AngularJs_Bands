// SERVICES

//https://es.wikipedia.org/w/api.php?action=query&titles=' + band + '&prop=revisions&rvprop=content&format=json

//API call service
bandsApp.service('bandService', ['$q','$http', function($q, $http){

return {

GetBand: function(band){

var deferred = $q.defer();

$http.get('https://es.wikipedia.org/w/api.php?action=query&titles=' + band + '&prop=revisions&rvprop=content&format=json').then(function(resp){
if(resp){
deferred.resolve(resp.data);
} else{
deferred.reject;
}

return deferred.promise;
})
}
}

}]);
