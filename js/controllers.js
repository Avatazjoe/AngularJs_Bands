
// CONTROLLERS

bandsApp.controller('HeaderController', ['$scope', '$location', function($scope, $location){

    $scope.isActive = function (viewLocation) {
        return viewLocation === '#' + $location.path();
    };

}]);

bandsApp.controller('homeController', function(){});

bandsApp.controller('fooController', function(){});

bandsApp.controller('bandController', ['$scope', '$location', '$resource', 'bandService', function($scope, $location, $resource, bandService) {

    $scope.locationPath = function (newLocation) {
        return $location.path(newLocation).slice(1);
    };

    $scope.band = $scope.locationPath();

    $scope.bandResult = bandService.GetBand($scope.band);
    $scope.band = $scope.locationPath().split('_').join(' ')
    console.log($scope.bandResult);

}]);





