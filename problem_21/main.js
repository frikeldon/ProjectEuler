var number = require('../utils/number');

var sumDivisors = function(num) {
    var divisors = number.properDivisors(num);
    var result = 0;

    divisors.pop();

    for (var i = 0; i < divisors.length; i++) {
        result += divisors[i];
    }
    
    return result;
}

var result = 0;
var amicable;
var i;

for (i = 1; i < 10000; i++) {
    amicable = sumDivisors(i);
    if (i !== amicable && i === sumDivisors(amicable)) {
        result += i;
    }
}

console.log(result);
