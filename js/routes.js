// ROUTES
bandsApp.config(function ($routeProvider) {

    $routeProvider

    .when('/', {
        templateUrl: 'pages/home.htm',
        controller: 'homeController'
    })

    .when('/foo', {
        templateUrl: 'pages/foo.htm',
        controller: 'fooController'
    })

    .when('/bar', {
        templateUrl: 'pages/bar.htm',
        controller: 'fooController'
    })

    .when('/The_Rolling_Stones', {
        templateUrl: 'pages/rolling.htm',
        controller: 'bandController'
    })

    .when('/The_Beatles', {
        templateUrl: 'pages/beatles.htm',
        controller: 'bandController'
    })

    .when('/Queen', {
        templateUrl: 'pages/queen.htm',
        controller: 'bandController'
    })

    .otherwise({
        redirectTo: '/'
    });

});
