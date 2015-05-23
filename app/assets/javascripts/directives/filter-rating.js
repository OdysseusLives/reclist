(function() {
    'use strict';

    angular.module('Reclist')
        .directive('filterRating', function() {
            return {
                restrict: 'AE',
                scope: { ratingNumber: '=' },
                templateUrl: 'filterRating.html'
            };
        });
})();