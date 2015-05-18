(function() {
    'use strict';

    angular.module('Reclist')
        .directive('filterRecommendations', function() {
            return {
                restrict: 'AE',
                scope: { filterText: '=' },
                templateUrl: 'filterRecommendations.html'
            }
        });
})();
