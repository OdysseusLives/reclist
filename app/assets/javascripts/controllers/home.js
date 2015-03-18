(function() {
    'use strict';

    angular
        .module('Reclist')
        .controller('HomeCtrl', function ($scope) {
            $scope.things = ['Angular', 'Rails 4.1', 'UI Router', 'Together!!'];
            $scope.recs = [
                {   title: 'the yellow wallpaper',
                    author: 'charlotte perkins gilman',
                    rating: 8,
                    summary: 'a chronicle of the narrator\'s descent into madness.'
                },
                {
                    title: 'brave new world',
                    author: 'aldous huxley',
                    rating: 9,
                    summary: 'a cautionary dystopian tale.'
                }
            ];
        });
})();