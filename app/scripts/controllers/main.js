'use strict';


angular.module('todoApp')
  .controller('TodoCtrl', function($scope,$http){
  	$scope.todos = [];
  	$scope.newToDo = '';
  	var update = function(){
  		$http.get('/api/v1/todo').success(function(data){
			$scope.todos = data;
		});
  	};
  	update();
	$scope.add = function(event){
		if(event.keyCode === 13 ){
			$http.post('/api/v1/todo', {text: $scope.newToDo}).success(function(data){
				$scope.todos = data;
				$scope.newToDo = '';
			});
		}
	};
	$scope.done = function(id){
			$http.delete('/api/v1/todo/' + id).success(function(data){
				update();
			});
	};
  })
  .controller('MainCtrl', function () { 
  });
