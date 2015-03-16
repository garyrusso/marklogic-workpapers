angular.module('app').factory('mvWorkpaper', function($resource) {
  var WorkpaperResource = $resource('/api/workpapers/:_id', {_id: "@id"}, {
    update: {method:'PUT',isArray:false}
  });
  
  return WorkpaperResource;
});
