var db = null;

// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'ngCordova'])
.value('config',{
      map_container:'map',
      map_offline:false,
      map_zoom_max:5,
      map_zoom_init:1,
      map_icon_url:'img/location.png',
      map_icon_size:[20, 30],
      map_icon_anchor:[20, 30],
      map_icon_popup_anchor:[-3, -20],
      map_online_tiles:'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      map_db_name:'tiles.gpkg',
      points_db_name: 'points.gpkg'
      })
.run(function($ionicPlatform, $cordovaSQLite, $rootScope) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:

   .state('tab.points', {
        url: '/points',
        views: {
          'tab-points': {
            templateUrl: 'templates/tab-points.html',
            controller: 'PointsCtrl'
          }
        }
      })
  .state('tab.map', {
        url: '/map',
        views: {
          'tab-map': {
            templateUrl: 'templates/tab-map.html',
            controller: 'MapCtrl'
          }
        }
      });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/points');
  //$urlRouterProvider.otherwise('/tab/map');

});
