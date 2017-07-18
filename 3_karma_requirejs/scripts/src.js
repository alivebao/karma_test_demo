define('scripts/src', function(){
	var src = {};
	src.reverseString = function(a){
		return a.split('').reverse().join('');
	}
	return src;
});