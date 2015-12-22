'use strict';

/**
 * @ngdoc overview
 * @name todoApp
 * @description
 * # todoApp
 *
 * Main module of the application.
 */
angular
  .module('todoApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngAnimate',
    'todo'
  ])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/:id', {
        templateUrl: 'views/detail.html',
        resolve: {
          id: function($q, $route, api){
            return api.getOne($route.current.params.id);
          }
        },
        controller: 'DetailCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
      $locationProvider.html5Mode(true);
  })
  .run(function($rootScope){
      $rootScope.$on('$routeChangeSuccess', function(data){
        console.log('routeChangeSuccess');
        console.log(data);
      });
      $rootScope.$on('$viewContentLoaded', function(data){
        console.log('viewContentLoaded');
        console.log(data);
      });
      $rootScope.$on('$routeChangeError', function(data){
        console.log('routeChangeError');
        console.log(data);
      });
  });
