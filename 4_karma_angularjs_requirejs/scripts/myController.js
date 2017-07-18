define('myController', ['myApp'], function(app){
	app.controller('myController', function($scope){
		$scope.reverseString = function(str){
			return str.split('').reverse().join('');
		}
	});
});