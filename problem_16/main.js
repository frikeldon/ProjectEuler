var bigInt = require('../utils/bigInt');

var number = bigInt.pow(2, 1000);
var result = 0;
var i;

for (i = 0; i < number.length; i++) {
    result += parseInt(number[i], 10);
}

console.log(result);