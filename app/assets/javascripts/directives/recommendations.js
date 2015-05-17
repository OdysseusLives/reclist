(function() {
    'use strict';

    angular.module('Reclist')
        .directive('recommendations', function($log) {
            return {
                restrict: 'AE',
                scope: {
                    recs: '=',
                    filterTerm: '=filter'
                },
                templateUrl: 'recommendations.html'
            }
        });
})();
