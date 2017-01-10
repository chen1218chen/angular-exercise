'use strict';

var myApp = angular.module('myApp',[]);
myApp.controller('loginCtrl',['$scope', function($scope){

	$scope.user={
	/*	name: "ch",
		password: 1,
		autoLogin: true*/
	};

	$scope.submitForm = function(){
		console.dir($scope.user);
		alert("success");
		
/*		$.ajax({
			type:"post",
			url:"",
			dataType:"json",
			data:$scope.user,
			success:function(data){
				alert("submit success!");
			}
		});*/

	}
}])