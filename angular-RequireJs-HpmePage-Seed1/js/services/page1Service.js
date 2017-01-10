define(['app'],function(app){
	app.register.service('Page1Service',Page1Service);

	Page1Service.$inject = ["$rootScope","$log","$http"];
	function Page1Service($rootScope,$log,$http){
		var services = {
			test: function(str){
				console.log(str);
				$rootScope.title = str;
 			// $rootScope.$broadcast("edit title!!")
 		},
 		getJson :function(){
 			$http.get("test.json")
 			.success(function(result){
 				//console.dir(result.sites);
 				$rootScope.array = result.sites;
 			})
 		}
 	}
 	return services;
 }
})