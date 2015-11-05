var number = require('../utils/number');

var result = 0;

for (var i = 1; i < 1000000; i++) {
    if (number.isPalindrome(i) && number.isPalindrome(i.toString(2))) {
        result += i;
    }
}

console.log(result);
