var app=angular.module('Application',['ngRoute']);



app.controller('FirstController',function($scope){
	console.log("Inside First Controller");
	$scope.first='Tanishq first Controller';
	
});
app.controller('SecondController',function($scope){
	console.log("Inside Second Controller");
	$scope.second='Tanishq Second Controller';
	
});

app.directive("myDirective", function() {
    return {
        template : "<h1>Made by a directive!</h1>"
    };
});
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "test.html"
    })
    .when("/home", {
        templateUrl : "home.html"
    })
    .when("/office", {
        templateUrl : "Office.html"
    })
    .when("/test", {
        templateUrl : "default.html"  });
    
});
