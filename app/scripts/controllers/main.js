'use strict';


angular.module('todoApp')
  .controller('TodoCtrl', function($scope,$http,$resource){
  	$scope.todos = [];
  	$scope.newToDo = '';
  	var Task = $resource('/api/v1/todo/:taskId',{taskId:'@id'});
  	var update = function(){
  		Task.query(function(data){
			$scope.todos = data;
		});
  	};
  	update();
	$scope.add = function(event){
		if(event.keyCode === 13 ){
			var t = new Task({text: $scope.newToDo});
			t.$save(function(){
				update();
				$scope.newToDo = '';
			});
		}
	};
	$scope.save = function(event, todo){
		if(event.keyCode === 13 ){
			todo.$save();
			//$http.post('/api/v1/todo/' + todo.id, {text: todo.text}).success(update);
		}
	};
	$scope.done = function(id){
			//todo.$delete().then(update)
			$http.delete('/api/v1/todo/' + id).success(update);
	};
  })
  .controller('MainCtrl', function () { 
  });
