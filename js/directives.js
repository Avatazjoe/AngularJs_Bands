//DIRECTIVES
bandsApp.directive('consDirective', function () {
    return {
        restrict: 'E',
        templateUrl: 'directives/consDirective.htm',
    }
});

bandsApp.directive('bandDirective', function ($sce) {
    return {
        restrict: 'E',
        templateUrl: 'directives/bandDirective.htm',
        scope: {
            bandResult: "=",
            band: "=",
            imgSrc: "=",
            videoUrl: "="
        },

    }
});

