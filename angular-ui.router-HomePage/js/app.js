angular.module("app", [
    "ui.router",//添加ui-router模块依赖
    "controllers",
    "services"
])
.config(["$stateProvider","$urlRouterProvider", 
    function($stateProvider,$urlRouterProvider) {
    //在这里配置状态
    $urlRouterProvider.when("", "/index");

    $stateProvider
    	.state("index",{
    		url:"/index",
    		views:{
    			"":{
    				templateUrl:"views/PageTab.html"
    			},
    			"header@index":{
    				templateUrl:'views/header.html'
    			},
    			"footer@index":{
    				templateUrl:"views/footer.html"
    			}
    		}
    	})
		.state("index.Page1",{
			url:"/Page1",
			templateUrl:"views/page1.html",
            controller:"Page1Ctrl",
            controllerAs:"vm"
		})
		.state("index.Page2",{
			url :"Page2",
			templateUrl:"views/page2.html",
            controller:"Page2Ctrl"
		})
		.state("index.Page3",{
			url:"/Page3",
			templateUrl:"views/page3.html",
            controller:"Page3Ctrl"
		});
	$urlRouterProvider.otherwise("/index"); 
}])