angular.module('app').controller('mvMainCtrl', function($scope, mvCachedWorkpapers) {
    $scope.workpapers = mvCachedWorkpapers.query();
    
});

