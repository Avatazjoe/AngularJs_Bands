
// CONTROLLERS

bandsApp.controller('HeaderController', ['$scope', '$location', 'Page', function($scope, $location, Page){

    //helps setting active class in header li's
    $scope.isActive = function (viewLocation) {
        return viewLocation === '#' + $location.path();
    };

}]);



bandsApp.controller('homeController', ['$scope', 'Page', function($scope, Page){
    //set metadata to default
    Page.setTitle('Angular Rocks');
    Page.setKeywords('angular rocks default');
    Page.setDescription('Esto es la descripción por defecto');
}]);



bandsApp.controller('fooController', ['$scope', 'Page', function($scope, Page){
    //set metadata to default
    Page.setTitle('Angular Rocks');
    Page.setKeywords('angular rocks default');
    Page.setDescription('Esto es la descripción por defecto');
}]);



bandsApp.controller('bandController', ['$scope', '$location', '$resource', 'bandService', '$sce', 'Page', function($scope, $location, $resource, bandService, $sce, Page) {

    //get path and format band name. Prepare it for ajax call
    $scope.locationPath = function (newLocation) {
        return $location.path(newLocation).slice(1);
    };
    $scope.band = $scope.locationPath();

    //use formatted band name to ask for band img
    $scope.imgSrc = 'assets/img/' + $scope.band + '.jpg';
    $scope.iconSrc = 'assets/img/' + $scope.band + '.png';

    //object containing embeded video links
    $scope.vid = {'The_Beatles': 'https://www.youtube.com/embed/n6j4TGqVl5g', 'The_Rolling_Stones': 'https://www.youtube.com/embed/u6d8eKvegLI', 'Queen': 'https://www.youtube.com/embed/HgzGwKwLmgM'};

    //getter for proper video link for each band
    $scope.videoUrl = $sce.trustAsResourceUrl($scope.vid[$scope.band]);

    //format band name for display in view
    $scope.band = $scope.locationPath().split('_').join(' ');
<<<<<<< HEAD
    
    
    //set variables for data-filtering
    $scope.keywords;
    $scope.desc;
    $scope.content = [];

    //call ajax service
    var callService = function() {

        // This service's function returns a promise
        bandService.getBand($scope.band)
        
        // then() called when we get data
            .then(function(data) {
            
            // promise is fulfilled, so we 
            // operate with the data (if exists)
            if (data) {
    
                for(var a in data){
                    $scope.content = (data[a]);
                }
                
                //get content to output it on view
                $scope.desc = $scope.content.slice($scope.content.indexOf("<p>"),$scope.content.lastIndexOf('<ol class="references"'));
                
                // filter and delete references 
                // numbers from api's text
                $scope.desc = $scope.desc.replace( new RegExp(/<sup(.*?)<\/sup>/g), '');
                
                //get first paragraph as meta-description
                $scope.descr = $scope.desc.slice($scope.content.indexOf("<p>"),$scope.content.lastIndexOf('</p>'));

                //get italic words as keywords
                $scope.keywords = [];
                $scope.desc.match(/<a(.*?)<\/a>/g).map(function(val){
                    
                    var firstPos = val.indexOf('title="') + 7; 
                    var finalPos = val.indexOf('">', firstPos)
                    var strLength = finalPos - firstPos;
              
                    val = val.substr(firstPos, strLength);
                    $scope.keywords.push(val);
                });
                
                $scope.keywords.splice(5, $scope.keywords.length-5);
                

                //set specific metadata for each band's view
                Page.setTitle($scope.band);
                Page.setKeywords($scope.keywords);
                Page.setDescription($scope.descr);
                
                //return data for view
                return $scope.desc;
            } else {
                console.log('error muy raruno');
            }
        }, function(error) {
            // promise rejected, could log the error with: console.log('error', error);
            console.log('error', error);
        });
    };

    callService();
=======

    //call ajax service

    $scope.bandResult= bandService.get($scope.band);
    bandService.get($scope.band).then(function(data) {
        var content;
        var keywords;
        var desc;
        var pages = data.data.query.pages;
        for(key in pages){
            var content = pages[key].extract;
            //get first paragraph as meta-description
            var desc = content.slice(1,content.indexOf("</p>"));
            //get italic words as keywords
            var keywords = desc.match(/<i>(.*?)<\/i>/g).map(function(val){
                return val.replace(/<\/?i>/g,'');
            });
            console.log(desc);
            console.log(keywords);
        }

        //set specific metadata for each band's view
        Page.setTitle($scope.band);
        Page.setKeywords(keywords);
        Page.setDescription(desc);
    });
>>>>>>> c9b6055ac80716e992c5f7356f0a0d298a715284


}]);


//injects page factory on head controller
bandsApp.controller('MainCtrl',['$scope', 'Page', function ($scope, Page) {
    $scope.Page = Page;
}]);






