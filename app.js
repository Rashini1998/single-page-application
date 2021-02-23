var app = angular.module("myApp", ["ngRoute"]);

app.config(function ($routeProvider) {
            $routeProvider
                .when("/main", {
                    templateUrl: "main.htm",
                    controller : "mainCtrl"
                })
                .when("/Login", {
                    templateUrl: "Login.htm",
                    controller: "LoginCtrl"
                })
                .when("/Register", {
                    templateUrl: "Register.htm",
                    controller: "RegisterCtrl"
                })
                .otherwise({redirectTo: '/'});
        });

app.controller("mainCtrl", function ($scope) {
    $scope.message = "This is the main Page";
});

app.controller("LoginCtrl", function ($scope) {
    $scope.message = "Enter your Email and Passward to Login";
});

app.controller("RegisterCtrl", function ($scope) {
    $scope.message = "Enter your details for registration";
});