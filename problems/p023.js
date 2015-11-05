var number = require('../utils/number');

var abundant = [];
var isAbundant = {};
var result = 0;
var i;

var sumDivisors = function(num) {
    var divisors = number.properDivisors(num);
    var result = 0;

    divisors.pop();

    for (var i = 0; i < divisors.length; i++) {
        result += divisors[i];
    }
    
    return result;
};

var isSumOfTwoAbundants = function(num) {
    for (var i = 0; i < abundant.length; i++) {
        if (abundant[i] >= num) {
            return false;
        }
        if (isAbundant[num - abundant[i]] === true) {
            return true;
        }
    }
    return false;
};

for (i = 1; i < 28123; i++) {
    if (sumDivisors(i) > i) {
        isAbundant[i] = true;
        abundant.push(i);
    }
}

abundant.sort(function(a,b) { return a - b; });

for (i = 1; i < 28123; i++) {
    if (!isSumOfTwoAbundants(i)) {
        result += i;
    }
}

console.log(result);
