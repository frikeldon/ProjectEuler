var number = require('../utils/number');

function triangular() {
    var current = 0;
    var count = 1;
    return function() {
        current += count++;
        return current;
    };
}

var tri = triangular();
var notFound = true;
var current;

while (notFound) {
    current = tri();
    if (number.numberOfDivisors(current) > 500) {
        notFound = false;
    }
}

console.log(current);
