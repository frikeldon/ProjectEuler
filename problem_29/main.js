var number = require('../utils/number');

function powFactors(factors, exponent) {
    return factors.map(function(factor) {
        return {
            base: factor.base,
            exponent: factor.exponent * exponent
        };
    });
}

function factorsToString(factor) {
    var sorted = factor.sort(function(a, b) {
        return a.base - b.base;
    }).map(function(e) {
        return e.base + '^' + e.exponent;
    });
    return sorted.join(',');
}

var powers = [];

for (var a = 2; a <= 100; a++) {
    var factors = number.factorization(a);
    for (var b = 2; b <= 100; b++) {
        var current = factorsToString(powFactors(factors, b));
        if (powers.indexOf(current) < 0) {
            powers.push(current);
        }
    }
}

console.log(powers.length);