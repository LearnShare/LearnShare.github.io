define([
	"./controllers"
], function(controllers){
	controllers.controller("newCtrl", [
		"$scope",
		function($scope){
			$scope.page = "new";
		}
	]);
});