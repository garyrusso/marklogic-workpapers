angular.module('app').controller('mvWorkpaperDetailCtrl', function($scope, mvCachedWorkpapers, $routeParams) {
  mvCachedWorkpapers.query().$promise.then(function(collection) {
    collection.forEach(function(workpaper) {
      if(workpaper._id === $routeParams.id) {
        $scope.workpaper = workpaper;
      }
    })
  });
});
