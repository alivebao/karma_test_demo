var app = angular.module('myApp', []);
app.controller('myController', function($scope){
	$scope.reverseString = function(str){
		return str.split('').reverse().join('');
	}
});