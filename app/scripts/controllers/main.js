'use strict';


angular.module('todoApp')
  .controller('TodoCtrl', function($scope,$http,$resource,api){
  	$scope.todos = [];
  	$scope.newToDo = '';
  	var Task = $resource('/api/v1/todo/:taskId',{taskId:'@id'});
  	var update = function(){
  		api.get(function(data){
  		//Task.query(function(data){
			$scope.todos = data;
		});
  	};
  	update();
	$scope.add = function(event){
		if(event.keyCode === 13 ){
			api.add($scope.newToDo,function(){
			//var t = new Task({text: $scope.newToDo});
			//t.$save(function(){
				update();
				$scope.newToDo = '';
			});
		}
	};
	$scope.save = function(event, todo){
		if(event.keyCode === 13 ){
			api.update(todo, update);
			//todo.$save();
			//$http.post('/api/v1/todo/' + todo.id, {text: todo.text}).success(update);
		}
	};
	$scope.done = function(id){
			api.delete(id, update);
			//$http.delete('/api/v1/todo/' + id).success(update);
	};
  })
  .controller('MainCtrl', function () { 
  });
