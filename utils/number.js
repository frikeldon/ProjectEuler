var primes = require('./primes');

function factorization(number) {

    if (primes.isPrime(number)) {
        return [{
            'base': number,
            'exponent': 1
        }];
    }

    var factors = [];
    var current;
    var exponent;

    for (var i = 0; number > 1; i++) {
        current = primes.primes[i];
        exponent = 0;
        while (number % current === 0) {
            exponent++;
            number /= current;
        }
        if (exponent > 0) {
            factors.push({
            'base': current,
            'exponent': exponent
            });
        }
    }

    return factors;

}

function numberOfDivisors(number) {
    var factors = factorization(number);
    return factors.reduce(function(previousValue, currentValue) {
        return previousValue * (currentValue.exponent + 1);
    }, 1);
}

exports.factorization = factorization;
exports.numberOfDivisors = numberOfDivisors;
