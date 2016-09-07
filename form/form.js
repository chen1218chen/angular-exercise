'use strict';

var myApp = angular.module('myApp',[]);
myApp.controller('loginCtrl',['$scope', function($scope){
	$scope.user={
	/*	name: "ch",
		password: 1,
		autoLogin: true*/
	};
	$scope.submitForm = function(){
		var formData = {
			name : $("input[name=name]").val(),
			password : $("input[name=password]").val()
		};
		console.dir(formData);
		alert(formData);
		$.ajax({
			type:"post",
			url:"",
			dataType:"json",
			data:formData,
			success:function(data){
				alert("submit success!");
			}
		});

/*		event.preventDefault();*/

	}


}])