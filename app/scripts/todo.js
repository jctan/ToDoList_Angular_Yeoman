'use strict';

angular.module('todo', [])
.factory('api', function($http,$resource,$q){
	var Task = $resource('/api/v1/todo/:taskId',{taskId:'@id'});
	var self = {
	//return {
		currentItem: null,

		getOne: function(id){
			var deferred = $q.defer();
			Task.query({taskId:id},function(data){
				self.currentItem = data;
				deferred.resolve(data);
			});
			return deferred.promise;
		},
		get: function(){ //don't need cb with promise
			var deferred = $q.defer();
			Task.query(function(data){
				//cb(data);
				deferred.resolve(data);
			});
			return deferred.promise;
		},
		add: function(text){ //don't need cb with promise
			var deferred = $q.defer();
			var t = new Task({text: text});
			t.$save(function(){
				deferred.resolve();
				//cb();
				//update();
				//$scope.newToDo = '';
			});
			return deferred.promise;
		},
		delete: function( id ){ //don't need cb with promise
			var deferred = $q.defer();
			$http.delete('/api/v1/todo/' + id).success(function(){
				deferred.resolve();
			});
			return deferred.promise;
		},
		update: function(todo){ //don't need cb with promise
			var deferred = $q.defer();
			$http.post('/api/v1/todo/' + todo.id, {text: todo.text}).success(function(){
				deferred.resolve();
			});
			/*todo.$save().then(function(){
				deferred.resolve();
			});*/
			return deferred.promise;
		}
	};
	return self;
});