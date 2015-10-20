//DIRECTIVES

//under construction pages
bandsApp.directive('consDirective', function () {
    return {
        restrict: 'E',
        templateUrl: 'directives/consDirective.htm',
    }
});

//used in band's views
bandsApp.directive('bandDirective', function ($timeout) {
    return {
        restrict: 'E',
        templateUrl: 'directives/bandDirective.htm',
        scope: {
            desc: "=",
            band: "=",
            imgSrc: "=",
            iconSrc: "=",
            videoUrl: "="
        }

    }
});

