var primes = require('../utils/primes');

function truncateFromRight(num) {
    return Math.floor(num / 10);
}

function truncateFromLeft(num) {
    return parseInt(num.toString().split('').slice(1).join(''), 10);
}

var i = primes.getPrimeIterator(4); // skip 1-digit prime numbers

var checkTruncate = function (num) {
    var left = num;
    var right = num;

   do {
        left = truncateFromLeft(left);
        right = truncateFromRight(right);

        if (!primes.isPrime(left) || !primes.isPrime(right)) {
            return false;
        }
    } while (left > 9);

    return true;
};

var response = 0;
var found = 0;

var current;
while (found < 11) {
    current = i.next();

    if (current.toString().split('').indexOf('0') === -1 && checkTruncate(current)) {
        response += current;
        found++;
    }
}

console.log(response);
