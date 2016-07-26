angular.module('app.controllers', [])
  
.controller('homeCtrl', function($scope) {

})
   
.controller('myGeoEventsCtrl', function($scope, localStorageService) {
	//initialize the tasks scope with empty array
	$scope.myEvents = [
	{
		"name":"Test Event 1",
		"location":"1234123412341234",
		"range":"100",
		start:new Date(),
		end:new Date()
	},{
		"name":"Test Event 2",
		"location":"1234123412341234",
		"range":"300",
		start:new Date(),
		end:new Date()

	}];

	localStorageService.set("myEvents", $scope.myEvents);


	$scope.getMyEvents = function(){
		if (localStorageService.get("myEvents")) {
            $scope.myEvents = localStorageService.get("myEvents");
            for(var i = 0; i <$scope.myEvents; i++){
            	if($scope.myEvents.start){
            		$scope.myEvents.start = new Date($scope.myEvents.start);
            	}
            	if($scope.myEvents.end){
            		$scope.myEvents.end = new Date($scope.myEvents.end);
            	}
            }
        } else {
            $scope.myEvents = [];
        }
	}

	$scope.deleteEvent = function(index){
		$scope.tasks.splice(index, 1);
		localStorageService.set("myEvents", $scope.myEvents);
	}
})
   
.controller('availableGeoEventsCtrl', function($scope) {

})
      
.controller('geoEventDetailsCtrl', function($scope, $stateParams, $state, localStorageService) {
	console.log($stateParams);
	var events;
	if (localStorageService.get("myEvents")) {
		events = localStorageService.get("myEvents");
		$scope.event = events[$stateParams.eventID];
		if($scope.event.start){
    		$scope.event.start = new Date($scope.event.start);
    	}
    	if($scope.event.end){
    		$scope.event.end = new Date($scope.event.end);
    	}
		console.log($scope.event)
	} else {
		$scope.event = {};
	}

	$scope.updateGeoEvent = function (){
		events[$stateParams.eventID] = $scope.event;
		localStorageService.set("myEvents", events);
		console.log($scope.event);
		$state.go('menu.myGeoEvents') 
	}
})