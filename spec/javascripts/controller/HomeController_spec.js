describe('HomeCtrl', function() {
    beforeEach(module('Reclist'));

    var $controller;

    beforeEach(inject(function(_$controller_){
        $controller = _$controller_;
    }));

    describe('$scope.things', function() {
        it('sets sets technology names that are important to this application', function() {
            var $scope = {};
            var controller = $controller('HomeCtrl', { $scope: $scope });
            expect($scope.things).toEqual(['Angular', 'Rails 4.1', 'UI Router', 'Together!!']);
        });
    });
});
