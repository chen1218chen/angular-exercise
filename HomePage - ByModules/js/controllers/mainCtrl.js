define(['Controller'], function(controllers) {
	controllers.controller('mainCtrl',['$scope','mainService',
	  function($scope,mainService) {
		 $scope.title = "主页";
//		 mainService.test();
		 console.log($scope.title);
	  }]);
})
