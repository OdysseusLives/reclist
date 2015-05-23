(function() {
    'use strict';

    angular.module('Reclist')
        .directive('recommendations', function() {
            return {
                restrict: 'AE',
                scope: {
                    recs: '=',
                    filterText: '=',
                    ratingNumber: '='
                },
                templateUrl: 'recommendations.html',
                link: function(scope) {
                    scope.filterRating = function( rec ) {
                        return rec.rating >= scope.ratingNumber;
                    };
                }
            };
        });
})();
