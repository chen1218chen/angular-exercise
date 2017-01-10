'use strict';

var app = angular.module('myApp',[]);
app.controller('regController',['$scope',function($scope){

	$scope.user={
		username:"chenchen",
		password:"111",
		confirmPassword:"111"
	};
	$scope.submitForm = function(){
		alert("success");
	}
}])