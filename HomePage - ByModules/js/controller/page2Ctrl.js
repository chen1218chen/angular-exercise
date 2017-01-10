define(['app'],function(app){
	app.registerController('Page2Ctrl',Page2Ctrl);

	Page2Ctrl.$inject = ["$scope","$log","$http"];
	function Page2Ctrl($scope,$log,$http){
		
		var vm2 = this;
		vm2.title = "222";
		// or
		//$scope.title="page2";

	}
});