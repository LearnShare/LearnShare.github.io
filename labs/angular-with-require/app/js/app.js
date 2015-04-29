define([
	"angular",
	"angularRoute",
	"controllers/all"
], function(angular, angularRoute){
	return angular.module("app", [
		"ngRoute",
		"app.controllers"
	])
	.config([
		"$routeProvider",
		function($routeProvider){
			$routeProvider
				.when("/", {
					controller: "indexCtrl",
					templateUrl: "templates/index.html"
				})
				.when("/test", {
					controller: "testCtrl",
					templateUrl: "templates/test.html"
				})
				.when("/new", {
					controller: "newCtrl",
					templateUrl: "templates/new.html"
				})

				.otherwise({
					redirectTo: "/"
				});
		}
	]);
});