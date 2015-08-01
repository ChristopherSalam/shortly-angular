angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.link = {};
  $scope.mostRecentLink = [];

  $scope.addLink = function(){
    var link = $scope.link;
    $scope.link = "";
    Links.addLink(link).then(function(data){
      $scope.mostRecentLink = [data];
      console.log('LINK ADDED:' , arguments);
    });
  }
});
