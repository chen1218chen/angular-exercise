define(['app'],function(app){
	app.register.controller('Page1Ctrl',Page1Ctrl);
	Page1Ctrl.$inject = ["$scope","$log","$http","Page1Service"];
	function Page1Ctrl($scope,$log,$http,Page1Service){
		var vm = this;
		//vm.title = "page1234";
		$scope.$watch("vm.title",function(current, original){
			// $log.info(current);
			//$log.info(original);
		});
		Page1Service.test("abc");
		//console.log("aaaaaaa"+page1Service.test());
		Page1Service.getJson();
		$http.get("test.json")
		.success(function(result){
			//console.dir(result.sites);
			//$scope.array = result.sites;
		})

	}
});