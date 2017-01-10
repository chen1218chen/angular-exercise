angular.module("services", [])
.service("page1Service",["$rootScope","$http",'$q',function($rootScope,$http,$q){
 	var services = {
 		test: function(str){
 			console.log(str);
 			$rootScope.title = "111";
 			// $rootScope.$broadcast("edit title!!")
 			return str;
 		},
 		getJson :function(){
 			$http.get("test.json")
 			.success(function(result){
 				return result.sites;
 			})
 		},
 		// 这样controller和servic的职业分离，并且controller完全不依赖http而只是依赖service传递的事件和数据
 		getData:function(){
	        var deferred = $q.defer();
	        var promise = $http.get("test.json");
	         promise.then(
	                  // 通讯成功的处理
	                  function(answer){
	                    //在这里可以对返回的数据集做一定的处理,再交由controller进行处理
	                    // console.dir(answer);
	                    answer.status = true;
	                    deferred.resolve(answer.data.sites);
	                  },
	                  // 通讯失败的处理
	                  function(error){
	                    // 可以先对失败的数据集做处理，再交由controller进行处理
	                    error.status = false;
	                    deferred.reject(error);
	                  });
	                //返回promise对象，交由controller继续处理成功、失败的业务回调
	        return deferred.promise;
	    }
 	}
 	return services;
 }]);
