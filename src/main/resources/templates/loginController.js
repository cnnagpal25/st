var app = angular.module("myApp");
app.controller('LoginController',function($scope,$rootScope,$location,$route,$routeParams,LoginService) {
    $rootScope.title = "Login"

    $scope.formSubmit = function() {
        if(LoginService.login($scope.username,$scope.password)) {
          console.log('username login : '+$scope.username);
          $rootScope.username = $scope.username;
          $location.path("/home");
        } else {
          $scope.error = "Inavlid Username or Password";
        }
    };
});
