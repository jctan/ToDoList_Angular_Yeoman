'use strict';
//$http makes general AJAX calls, and $resources wraps $http with RESTful webservices

angular.module('todoApp')
  .controller('TodoCtrl', function($scope,$http,api){ //don't need $esource since it's in todo.js
  	$scope.todos = [];
  	//$scope.newToDo = ''; //this one too
  	//var Task = $resource('/api/v1/todo/:taskId',{taskId:'@id'});
  	var update = function(){
  		api.get().then(function(data){ //promise use .then to return obj
  		//Task.query(function(data){
			$scope.todos = data;
		});
  	};
  	update();
  	//listen to the event
  	$scope.$on('update', update);
	/*$scope.add = function(event){
		if(event.keyCode === 13 ){
			api.add($scope.newToDo).then(function(){
			//api.add($scope.newToDo, function(){
			//var t = new Task({text: $scope.newToDo});
			//t.$save(function(){
				update();
				$scope.newToDo = '';
			});
		}
	};

	$scope.save = function(event, todo){
		if(event.keyCode === 13 ){
			api.update(todo).then(update);
			//api.update(todo update);
			//todo.$save();
			//$http.post('/api/v1/todo/' + todo.id, {text: todo.text}).success(update);
		}
	};

	$scope.done = function(id){
			api.delete(id).then(update);
			//api.delete(id, update);
			//$http.delete('/api/v1/todo/' + id).success(update);
	};*/
  })
  .controller('MainCtrl', function () { 
  });
