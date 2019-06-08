var app = angular.module('myApp');

  app.controller('HomeController',
  function($scope, $rootScope, $routeParams, $route, LoginService) {
    $scope.user = $rootScope.username;

  });
