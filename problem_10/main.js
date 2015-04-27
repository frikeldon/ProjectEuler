var primes = require('../utils/primes.js');

primes.checkPrimesTo(2000000);
console.log(primes.primes.reduce(function(a, b) { return a + b; }, 0));
