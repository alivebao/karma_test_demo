define(['src'], function(src){
	describe("karma demo - it is a demo combine requireJS", function(){
	it("testing - test case 1", function(){
		expect(src.reverseString("123")).toBe("321");
	});
});
});