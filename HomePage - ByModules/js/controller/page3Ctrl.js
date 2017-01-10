define(['app'],function(app){
	app.registerController('Page3Ctrl',Page3Ctrl);

	Page3Ctrl.$inject = ["$scope","$log","$http"];
	function Page3Ctrl($scope,$log,$http){
		$scope.title="page3"

	}
});