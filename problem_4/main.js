function isPalindrome(num) {
	num = num.toString();
	var length = Math.floor(num.length / 2);
	var last = num.length - 1;
	for(var i = 0; i < length; i++) {
		if(num.charAt(i) !== num.charAt(last - i)) {
			return false;
		}
	}
	return true;
}

var answer = 0;
for(var i = 999; i > 99; i--) {
	for(var j = 999; j > 99; j--) {
		if(isPalindrome(i * j)) {
			answer = Math.max(answer, i * j);
		}
	}
}
console.log(answer);
