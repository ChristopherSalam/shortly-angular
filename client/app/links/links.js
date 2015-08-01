angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links, $sce) {

  $scope.data = {};
  $scope.trustSrc = function(src) {
    return $sce.trustAsResourceUrl(src);
  }

  $scope.getLinks = function(){
    Links.links().then(function(data){
      $scope.data.links = data;
    });
  }

  $scope.getLinks();
});