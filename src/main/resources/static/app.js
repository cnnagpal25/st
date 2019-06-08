(function() {
    var app = angular.module('myApp',['ngRoute']);

    app.config(['$routeProvider',function($routeProvider) {
      $routeProvider.when('/login',{
        templateUrl : '/partial/login',
        controller : 'LoginController'
      }).
      when('/home',{
        templateUrl : '/partial/home',
        controller : 'HomeController'
      }).otherwise({
        redirectTo:'/login'
      });
    }
  ]);
  })();
