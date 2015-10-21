var primes = require('../utils/primes');

function isPandigital(number) {
    number = number.toString();
    var ordered = [ '1', '2', '3', '4', '5', '6', '7', '8', '9' ].slice(0, number.length).join('');
    return number.split('').sort().join('') === ordered;
}

var i = primes.getPrimeIterator(4);
var current;
var largest;

do {
    current = i.next();
    if (isPandigital(current)) {
        largest = current;
    }
} while (current < 10000000);

console.log(largest);
