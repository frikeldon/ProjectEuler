var number = require('../utils/number');

var answer = 0;
for(var i = 999; i > 99; i--) {
	for(var j = 999; j > 99; j--) {
		if(number.isPalindrome(i * j)) {
			answer = Math.max(answer, i * j);
		}
	}
}
console.log(answer);
