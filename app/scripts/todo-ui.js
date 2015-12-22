'use strict';

/*
directives encourage code reuse, help modularize your app.
*/

angular.module('todo')
.directive('todo', function(api){
	return{
		scope: {
			item: '=todo'
		},
		template: '<button ng-click="done()" class="btn btn-xs btn-danger">Done</button><input text="text" ng-model="item.text" ng-keyup="save($event)">',
		link: function(scope){
			scope.save = function(event){
				if(event.keyCode === 13 ){
					api.update(scope.item).then(function(){
						scope.$emit('update');
					});
					//api.update(todo update);
					//todo.$save();
					//$http.post('/api/v1/todo/' + todo.id, {text: todo.text}).success(update);
				}
			};
			scope.done = function(){
					api.delete(scope.item);
					scope.$emit('update');
					//api.delete(id, update);
					//$http.delete('/api/v1/todo/' + id).success(update);
			};
		}
	};
})
.directive('newtodo', function(api){
	return{
		restrict: 'E',
		scope: {
			size: '@?'
		},
		template: '<div class="row"><div class="col-nd-12"><input type="text" ng-model="newToDo" ng-keyup="add($event)" style=font-size:{{size}};></div></div>',
		link: function(scope){
				scope.size = scope.size || 'normal';
				scope.newToDo = '';
				scope.add = function(event){
				if(event.keyCode === 13 ){
					api.add(scope.newToDo).then(function(){
					//api.add($scope.newToDo, function(){
					//var t = new Task({text: $scope.newToDo});
					//t.$save(function(){
						scope.$emit('update');
						scope.newToDo = '';
					});
				}
			};
		}
	};
});