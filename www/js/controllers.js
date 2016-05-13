angular.module('starter.controllers', [])
.controller('PointsCtrl', function ($scope, $ionicPlatform, Points) {
    $scope.points = Points.all();
		/*$ionicPlatform.ready(function () {
      
      
			/*Points.all().then(function (points) {
			  //$scope.points = angular.copy(points);	
			});
		});*/

	});
