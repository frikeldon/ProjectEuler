var primes = require('../utils/primes');
primes.checkPrimesTo(1000000);

function getRotations(num) {
    var digits = num.toString().split('');
    var rotations = [ num ];

    for (var i = 1; i < digits.length; i++) {
        digits.push(digits.shift());
        rotations.push(parseInt(digits.join(''), 10));
    }

    return rotations;
}

var count = 0;

primes.primes.forEach(function(prime) {
    var allPrimes = true;
    getRotations(prime).forEach(function(rotated) {
        if (!primes.isPrime(rotated)) {
            allPrimes = false;
        }
    });
    if (allPrimes) {
        count++;
    }
});

console.log(count);
