var bigInt = require('../utils/bigInt');
var number = require('../utils/number');

function isLychrel(num) {
    var tries = 53;

    var current = num.toString();
    var reverse;

    while (tries--) {
        reverse = current.split('').reverse().join('');
        current = bigInt.sum(current, reverse);

        if (number.isPalindrome(current)) {
            return false;
        }
    }

    return true;
}

var count = 0;

for (var i = 1; i < 10000; i++) {
    if (isLychrel(i)) {
        count++;
    }
}

console.log(count);
