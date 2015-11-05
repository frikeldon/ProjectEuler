var bigInt = require('../utils/bigInt');

var nums = [];
var result = 0;
var factorial;
var i;

for (i = 2; i <= 100; i++) {
    nums.push(i.toString());
}

factorial = bigInt.mul.apply(bigInt, nums);

for (i = 0; i < factorial.length; i++) {
    result += parseInt(factorial[i], 10);
}

console.log(result);
