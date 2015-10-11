//DIRECTIVES

//under construction pages
bandsApp.directive('consDirective', function () {
    return {
        restrict: 'E',
        templateUrl: 'directives/consDirective.htm',
    }
});

//used in band's views
bandsApp.directive('bandDirective', function ($sce) {
    return {
        restrict: 'E',
        templateUrl: 'directives/bandDirective.htm',
        scope: {
            bandResult: "=",
            band: "=",
            imgSrc: "=",
            iconSrc: "=",
            videoUrl: "="
        },

    }
});

