
// CONTROLLERS

bandsApp.controller('HeaderController', ['$scope', '$location', function($scope, $location){

    //helps setting active class in header li's
    $scope.isActive = function (viewLocation) {
        return viewLocation === '#' + $location.path();
    };

}]);

bandsApp.controller('homeController', function(){});

bandsApp.controller('fooController', function(){});

bandsApp.controller('bandController', ['$scope', '$location', '$resource', 'bandService', '$sce', function($scope, $location, $resource, bandService, $sce) {

    //get path and format band name. Prepare it for ajax call
    $scope.locationPath = function (newLocation) {
        return $location.path(newLocation).slice(1);
    };
    $scope.band = $scope.locationPath();

    //use formatted band name to ask for band img
    $scope.imgSrc = 'assets/img/' + $scope.band + '.jpg';

    //object containing embeded video links
    $scope.vid = {'The_Beatles': 'https://www.youtube.com/embed/n6j4TGqVl5g', 'The_Rolling_Stones': 'https://www.youtube.com/embed/u6d8eKvegLI', 'Queen': 'https://www.youtube.com/embed/HgzGwKwLmgM'};

    //getter for proper video link for each band
    $scope.videoUrl = $sce.trustAsResourceUrl($scope.vid[$scope.band]);

    //call ajax service
    $scope.bandResult = bandService.GetBand($scope.band);


    //format band name for display in view
    $scope.band = $scope.locationPath().split('_').join(' ')
    //console.log($scope.bandResult);

}]);





