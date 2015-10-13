
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


}]);


//injects page factory on head controller
bandsApp.controller('MainCtrl',['$scope', 'Page', function ($scope, Page) {
    $scope.Page = Page;
}]);






