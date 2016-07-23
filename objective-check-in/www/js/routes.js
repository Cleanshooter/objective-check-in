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
      'side-menu21': {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      }
    }
  })

  .state('myGeoEvents', {
    url: '/my-geo-events',
    templateUrl: 'templates/myGeoEvents.html',
    controller: 'myGeoEventsCtrl'
  })

  .state('availableGeoEvents', {
    url: '/available-geo-events',
    templateUrl: 'templates/availableGeoEvents.html',
    controller: 'availableGeoEventsCtrl'
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    abstract:true
  })

  .state('menu.geoEventDetails', {
    url: '/geo-event-details',
    views: {
      'side-menu21': {
        templateUrl: 'templates/geoEventDetails.html',
        controller: 'geoEventDetailsCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/side-menu21/home')

  

});