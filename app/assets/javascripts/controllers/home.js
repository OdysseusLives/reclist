(function() {
    'use strict';

    angular
        .module('Reclist')
        .controller('HomeCtrl', function ($scope) {
            $scope.things = ['Angular', 'Rails 4.1', 'UI Router', 'Together!!'];
        });
})();