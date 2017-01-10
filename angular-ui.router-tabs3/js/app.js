var myApp = angular.module("app", [
    "ui.router"//添加ui-router模块依赖
]);
myApp.config(["$stateProvider","$urlRouterProvider", 
    function($stateProvider,$urlRouterProvider) {
    //在这里配置状态
    $urlRouterProvider.when("", "/PageTab");

    $stateProvider
    	.state("PageTab",{
    		url:"/PageTab",
    		templateUrl:"views/pageTab.html"
    	})
		.state("PageTab.Page1",{
			url:"/Page1",
			templateUrl:"views/page1.html"
		})
		.state("PageTab.Page2",{
			url :"Page2",
			templateUrl:"views/page2.html"
		})
		.state("PageTab.Page3",{
			url:"/Page3",
			templateUrl:"views/page3.html"
		});
	$urlRouterProvider.otherwise("/PageTab"); 
}])