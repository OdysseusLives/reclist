(function() {
    'use strict';

    angular.module('Reclist')
        .directive('filterRecommendations', function() {
            return {
                restrict: 'AE',
                scope: { filter: '=' },
                templateUrl: 'filterRecommendations.html'
            }
        });
})();
