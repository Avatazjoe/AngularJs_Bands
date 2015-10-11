//filters

bandsApp.filter('capitalize', function() {
    'use strict'
    return function(token) {
        return token.charAt(0).toUpperCase() + token.slice(1);
    }
});


bandsApp.filter('unsafe', function($sce) {
    return function(val) {
        return $sce.trustAsHtml(val);
    };
});

