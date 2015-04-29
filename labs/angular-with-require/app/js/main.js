require.config({
	baseUrl: "./js",
	paths: {
		angular: "lib/angular",
		angularRoute: "lib/angular-route"
	},
	shim: {
		angular: {
			exports: "angular"
		},
		angularRoute: ["angular"]
	}
});

require([
	"angular",
	"app"
], function(angular, app){
	angular.element().ready(function(){
		angular.bootstrap(document, ["app"]);
	});
});