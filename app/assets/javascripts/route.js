(function() {
    'use strict';

    angular
        .module('reclist')
        .config(function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('/');

            $stateProvider
                .state('home', {
                    url: '/',
                    templateUrl: 'home.html',
                    controller: 'HomeCtrl'
                });
        });
})();