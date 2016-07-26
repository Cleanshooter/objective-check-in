angular.module('app.controllers', [])
  
.controller('homeCtrl', function($scope, Events, localStorageService) {
	//test data
	Events.addEvent({
		"name":"Test Event 1",
		"location":"1234123412341234",
		"range":"100",
		start:new Date(),
		end:new Date()
	});
	Events.addEvent({
		"name":"Test Event 2",
		"location":"1234123412341234",
		"range":"300",
		start:new Date(),
		end:new Date()
	});

	localStorageService.set("myEvents", Events.getList());

})
   
.controller('myGeoEventsCtrl', function($scope, Events, localStorageService) {
	$scope.myEvents = Events.getList();

	$scope.deleteEvent = function(index){
		Events.removeEvent(index);
		localStorageService.set("myEvents", Events.getList());
	}
})
   
.controller('availableGeoEventsCtrl', function($scope) {

})
      
.controller('geoEventDetailsCtrl', function($scope, $stateParams, $state, Events, localStorageService) {
	//console.log($stateParams.eventID);
	$scope.event = Events.getEvent($stateParams.eventID);
	//console.log($scope.event);

	$scope.updateGeoEvent = function (){
		//Update local bindings
		Events.updateEvent($scope.event, $stateParams.eventID);
		//Update Stored bindings
		localStorageService.set("myEvents", Events.getList());
		$state.go('menu.myGeoEvents', {}, { reload: true });
	}
})