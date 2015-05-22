(function() {
    'use strict';

    angular.module('Reclist')
        .directive('filterRating', function() {
            return {
                restrict: 'AE',
                scope: { },
                templateUrl: 'filterRating.html',
                link: function(scope) {
                    scope.filterRating = 5;
                }
            };
        });
})();