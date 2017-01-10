define(['app'], function (app) {
    app.config(function($stateProvider, $urlRouterProvider, $controllerProvider
        , $compileProvider, $filterProvider, $provide,$locationProvider){
        app.registerController = $controllerProvider.register;
        app.register = {
            controller: $controllerProvider.register,
            directive: $compileProvider.directive,
            filter: $filterProvider.register,
            factory: $provide.factory,
            service: $provide.service
        };

        app.loadJs = function(js){
            return function($rootScope, $q){
                var def = $q.defer(),deps=[];
                angular.isArray(js) ? (deps = js) : deps.push(js);
                require(deps,function(){
                    $rootScope.$apply(function(){
                        def.resolve();
                    });
                });
                return def.promise;
            };
        };

            // $urlRouterProvider.when("", "/index");
            $urlRouterProvider.otherwise("/index"); 
            // $locationProvider.html5Mode(true);
            
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
                controllerAs:"vm",
                resolve:{
                    deps: app.loadJs(["./controller/page1Ctrl",'./services/page1Service'])
                }
            })
            .state("index.Page2",{
                url :"Page2",
                templateUrl:"views/page2.html",
                controller:"Page2Ctrl",
                controllerAs:"vm2",
                resolve:{
                    deps: app.loadJs("./controller/page2Ctrl")
                }
            })
            .state("index.Page3",{
                url:"/Page3",
                templateUrl:"views/page3.html",
                controller:"Page3Ctrl",
                resolve:{
                    deps: app.loadJs("./controller/page3Ctrl")
                }
            });
            
        });
});

