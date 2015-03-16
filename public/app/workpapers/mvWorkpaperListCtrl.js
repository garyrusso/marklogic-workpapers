angular.module('app').controller('mvWorkpaperListCtrl', function($scope, mvCachedWorkpapers) {
  $scope.workpapers = mvCachedWorkpapers.query();
  
  $scope.sortOptions = [
    {value:"title",text: "Sort by Title"},
    {value: "submitted",text: "Sort by Submitted Date"}
  ];
  $scope.sortOrder = $scope.sortOptions[0].value;
});

