angular.module('app').factory('mvCachedWorkpapers', function(mvWorkpaper) {
  var workpaperList;
  
  return {
    query: function() {
      if(!workpaperList) {
        workpaperList = mvWorkpaper.query();
      }
      
      return workpaperList;
    }
  }
});
