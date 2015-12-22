'use strict';

/**
 * @ngdoc function
 * @name todoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the todoApp
 */
angular.module('todoApp')
  .controller('TodoCtrl', function($scope,$http){
  	$scope.todos = [];
  	$scope.new_todo = '';
	$http.get('/api/v1/todo').success(function(data){
		$scope.todos = data;
	});
	$scope.add = function(event){
		if(event.keyCode == 13 ){
			$http.post('/api/v1/todo', {text: $scope.new_todo}).success(function(data){
				$scope.todos = data;
				$scope.new_todo = '';
			});
		}
	}
  })
  .controller('MainCtrl', function ($scope, $http) { 
  });
