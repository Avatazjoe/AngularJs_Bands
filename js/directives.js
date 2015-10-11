//DIRECTIVES
bandsApp.directive('consDirective', function () {
    return {
        restrict: 'E',
        templateUrl: 'directives/consDirective.htm',
    }
});

bandsApp.directive('bandDirective', function () {
    return {
        restrict: 'E',
        templateUrl: 'directives/bandDirective.htm',
        controller: function(){

        },
        scope: {
            bandResult: "=",
            band: "="
        }
    }
});

