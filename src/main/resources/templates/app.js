(function() {
    var app = angular.module('myApp',['ngRoute']);
    app.config(['$routeProvider',function($routeProvider) {
      $routeProvider.when('/login',{
        templateUrl : 'login.jade'
        controller : 'LoginController'
      }).
      when('/home',{
        templateUrl : 'home.jade'
        controller : 'HomeController'
      }).otherwise({
        redirectTo:'/login'
      });
    }
  ]);
}
)();
