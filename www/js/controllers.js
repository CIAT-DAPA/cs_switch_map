angular.module('starter.controllers', [])
.controller('PointsCtrl', function ($scope, $ionicPlatform, Points) {
		$ionicPlatform.ready(function () {
      		Points.all().then(function (points) {
			    $scope.points = angular.copy(points);	
			});
		});
	})
.controller('MapCtrl', function ($scope, $ionicPlatform, Points, config, Tiles) {
		$ionicPlatform.ready(function () {
			var map=null;
            var layer = null;
            var map_center_lat=0;
            var map_center_lon=0;
            var map_max_zoom=18;
            var container='map';
            var icon = L.icon({
                iconUrl: 'img/location.png',
                iconSize:     [20, 30], // size of the icon
                iconAnchor:   [20, 30], // point of the icon which will correspond to marker's location
                popupAnchor:  [-3, -20] // point from which the popup should open relative to the iconAnchor
            });
           	map = L.map(container, { center: new L.LatLng(map_center_lat, map_center_lon), zoom: 1, minZoom: 1, maxZoom: map_max_zoom });
			layer = new L.TileLayer.GeoPackage({ tms: true, model : Tiles });
			map.addLayer(layer);
		});

	});
