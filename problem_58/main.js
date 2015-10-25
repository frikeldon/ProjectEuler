var primes = require('../utils/primes');

var current = 1;
var step = 0;

var primesCount = 0;
var totalCount = 1;

var sides;

do {
    step += 2;
    for (sides = 0; sides < 4; sides++) {
        current += step;

        if (sides < 3 && primes.isPrimeDet(current)) {
            primesCount++;
        }

    }
    totalCount += 4;
} while (primesCount / totalCount >= 0.1);

console.log(step + 1);
