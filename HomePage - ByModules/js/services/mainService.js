
define('app', function(app) {
	app.factory('mainService', function() {
		/*var factory = {};
		factory.test = function(){
			console.log("bb");
		}
		return factory;*/
		 return {
	            getData : function() {
	                return 'service1';
	            }
		 }
	})

})
