define([
	"./controllers"
], function(controllers){
	controllers.controller("indexCtrl", [
		"$scope",
		function($scope){
			$scope.page = "index";
		}
	]);
});