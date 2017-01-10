define(['app'],function(app){
	app.register.controller('Page3Ctrl',Page3Ctrl);

	Page3Ctrl.$inject = ["$scope","$log","$http"];

	function Page3Ctrl($scope,$log,$http){
		$scope.title="page3"
		$http.get("test.json")
		.success(function(result){
			//console.dir(result.sites);
			$scope.listItems = result.sites;
		})
	}
});