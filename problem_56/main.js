var bigInt = require('../utils/bigInt');

var a, b;
var acumulated;
var max = 0;

function sumDigits(num) {
    num = num.toString();
    return num.split('').reduce(function(previousValue, currentValue) {
        return previousValue + parseInt(currentValue, 10);
    }, 0);
}

for (a = 1; a < 100; a++) {
    acumulated = a.toString();
    for (b = 2; b < 100; b++) {
        acumulated = bigInt.mul(acumulated, a);
        max = Math.max(max, sumDigits(acumulated));
    }
}

console.log(max);