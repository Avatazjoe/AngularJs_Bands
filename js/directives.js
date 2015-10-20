//DIRECTIVES

//under construction pages
bandsApp.directive('consDirective', function () {
    return {
        restrict: 'E',
        templateUrl: 'directives/consDirective.htm',
    }
});

//used in band's views
<<<<<<< HEAD
bandsApp.directive('bandDirective', function ($timeout) {
=======
bandsApp.directive('bandDirective', function ($sce) {
>>>>>>> c9b6055ac80716e992c5f7356f0a0d298a715284
    return {
        restrict: 'E',
        templateUrl: 'directives/bandDirective.htm',
        scope: {
<<<<<<< HEAD
            desc: "=",
=======
            bandResult: "=",
>>>>>>> c9b6055ac80716e992c5f7356f0a0d298a715284
            band: "=",
            imgSrc: "=",
            iconSrc: "=",
            videoUrl: "="
<<<<<<< HEAD
        }
=======
        },
>>>>>>> c9b6055ac80716e992c5f7356f0a0d298a715284

    }
});

