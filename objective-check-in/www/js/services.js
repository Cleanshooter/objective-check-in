angular.module('app.services', [])

.factory('Events', function(){
	var events = [];
	function getList(){
		//console.info("GET");
		//console.log(events);
		return events;
	}

	function getEvent(index){
		//console.info("GET EVENT");
		//console.log(events[index])
		return events[index];
	}

	function addEvent(data){
		events.push(data);
		//console.info("ADD");
		//console.log(data);
	}

	function updateEvent(data, index){
		events[index] = data;
		//console.info("UPDATE");
		//console.log(events[index]);
	}

	function removeEvent(index){
		//console.info("REMOVE");
		//console.log(index);
		events.splice(index, 1);
	}

	return {
		getList: getList,
		getEvent: getEvent,
		addEvent: addEvent,
		updateEvent: updateEvent,
		removeEvent: removeEvent
	}
})

.service('BlankService', [function(){

}]);

