var primes = require('../utils/primes');

function isTwiceSquare(num) {
    if (num % 2 !== 0) {
        return false;
    }
    num /= 2;
    var root = Math.floor(Math.sqrt(num));
    return num === root * root;
}

function check(num) {
    var i = primes.getPrimeIterator(1);

    while (i.value < num) {
        if (isTwiceSquare(num - i.value)) {
            return true;
        }
        i.next();
    }
    return false;
}

var num = 9;

while (check(num)) {
    do {
        num += 2;
    } while (primes.isPrime(num));
}

console.log(num);
