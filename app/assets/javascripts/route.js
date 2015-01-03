(function() {
    'use strict';

    angular
        .module('Reclist')
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