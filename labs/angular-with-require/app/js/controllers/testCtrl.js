define([
	"./controllers"
], function(controllers){
	controllers.controller("testCtrl", [
		"$scope",
		function($scope){
			$scope.page = "test";
		}
	]);
});