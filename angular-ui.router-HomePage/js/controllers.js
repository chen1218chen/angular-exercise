angular.module("controllers", ["services"])
.controller("Page1Ctrl",Page1Ctrl)
.controller("Page2Ctrl",["$scope",function($scope){
	$scope.title="page2"
}])
.controller("Page3Ctrl",["$scope",function($scope){
	$scope.title="page3"
}]);

Page1Ctrl.$inject = ["$scope","$log","$http","page1Service"] ;
function Page1Ctrl($scope,$log,$http,page1Service){
	var vm = this;
	vm.title = "page1";
	$scope.$watch("vm.title",function(current, original){
		// $log.info(current);
		// $log.info(original);
	});
	vm.title = page1Service.test("abc");
	page1Service.getData().then(
	     function(result){
	        console.dir(result);
	     },
	     function(error){
	       console.dir(error);
	     }
	 );
	/*$http.get("test.json")
 			.success(function(result){
 				console.dir(result.sites);
 			})*/

}