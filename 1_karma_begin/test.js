describe("karma demo - it is a simple test", function(){
	it("testing function reverseString - test case 1", function(){
		expect(reverseString("123")).toBe("321");
	});
	it("testing function reverseString - test case 2", function(){
		expect(reverseString("121")).toBe("121");
	});
});