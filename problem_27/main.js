var primes = require('../utils/primes.js');

function getCuadraticFunction(a, b) {
    return function(n) {
        return ((n + a) * n) + b;
    };
}

function getLengthOfQuadraticFunction(quaratic) {
    var n = 0;
    while (primes.isPrime(quaratic(n))) n++;
    return n;
}

var response = {
    a: 0,
    b: 0,
    length: -1
};

for (var a = -999; a < 1000; a++) {
    for (var b = -999; b < 1000; b++) {
        var length = getLengthOfQuadraticFunction(getCuadraticFunction(a, b));
        if (length > response.length) {
            response.a = a;
            response.b = b;
            response.length = length;
        }
    }
}

console.log(response.a * response.b);