(function() {
    'use strict';

    angular.module('Reclist')
        .directive('recommendations', function() {
            return {
                restrict: 'AE',
                scope: {
                    recs: '=',
                    filterText: '='
                },
                templateUrl: 'recommendations.html'
            };
        });
})();
