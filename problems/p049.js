var primes = require('../utils/primes');
primes.checkPrimesTo(10000);

function isPermutation(num1, num2) {
    num1 = num1.toString().split('').sort().join('');
    num2 = num2.toString().split('').sort().join('');
    return num1 === num2;
}

var firstIndex = 0;

while(primes.primes[firstIndex] < 1000) { firstIndex++; }

var i, j;
var count;
var diff;
var third;

for (i = firstIndex; i < primes.primes.length; i++) {
    for (j = i + 1; j < primes.primes.length; j++) {
        if (isPermutation(primes.primes[i], primes.primes[j])) {
            diff = primes.primes[j] - primes.primes[i];
            third = primes.primes[j] + diff;
            if (isPermutation(primes.primes[i], third) && primes.isPrime(third)) {
                console.log(primes.primes[i] + ',' + primes.primes[j] + ',' + third + ' - ' + diff);
            }
        }
    }
}
