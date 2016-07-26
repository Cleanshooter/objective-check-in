angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

  .state('menu.home', {
    url: '/home',
    views: {
      'side-menu': {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      }
    }
  })

  .state('menu.myGeoEvents', {
    url: '/my-geo-events',
     views: {
      'side-menu': {
        templateUrl: 'templates/myGeoEvents.html',
        controller: 'myGeoEventsCtrl'
      }
    }
  })

  .state('menu.availableGeoEvents', {
    url: '/available-geo-events',
     views: {
      'side-menu': {
        templateUrl: 'templates/availableGeoEvents.html',
        controller: 'availableGeoEventsCtrl'
      }
    }
  })

  .state('menu', {
    url: '/side-menu',
    templateUrl: 'templates/menu.html',
    abstract:true
  })

  .state('geoEventDetails', {
    url: '/geo-event-details/:eventID',
    templateUrl: 'templates/geoEventDetails.html',
    controller: 'geoEventDetailsCtrl'
  })

$urlRouterProvider.otherwise('/side-menu/home')  

});