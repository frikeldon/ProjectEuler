var primes = require('../utils/primes');

var main = primes.getPrimeIterator(0);
var seq;
var sum;
var count;
var maxCount = 0;
var maxSum;

while (main.value < 1000000) {
    seq = primes.getPrimeIterator(main.index);
    sum = main.value;
    count = 1;
    while (sum < 1000000) {
        sum += seq.next();
        count++;

        if (primes.isPrime(sum) && maxCount < count) {
            maxCount = count;
            maxSum = sum;
        }
    }
    main.next();
}

console.log(maxSum);
