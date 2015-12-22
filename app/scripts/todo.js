'use strict';

angular.module('todo', [])
.factory('api', function($http,$resource){
	var Task = $resource('/api/v1/todo/:taskId',{taskId:'@id'});
	return{
		get: function( cb ){
			Task.query(function(data){
				cb(data);
			});
		},
		add: function(text, cb){
			var t = new Task({text: text});
			t.$save(function(){
				cb();
				//update();
				//$scope.newToDo = '';
			});
		},
		delete: function( id, cb){
			$http.delete('/api/v1/todo/' + id).success(cb);
		},
		update: function(todo, cb){
			todo.$save().then(cb);
		}
	};
});