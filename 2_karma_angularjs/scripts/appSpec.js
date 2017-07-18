describe("karma demo - it is a demo combine AngularJS", function(){
	var scope = null;

	beforeEach(module('myApp'));
	beforeEach(inject(function($rootScope, $controller){
		scope = $rootScope.$new();
		$controller('myController', {$scope: scope});
	}));

	it("testing - test case 1", function(){
		expect(scope.reverseString("123")).toBe("321");
	});
});