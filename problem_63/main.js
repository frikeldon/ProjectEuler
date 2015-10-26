var bigInt = require('../utils/bigInt');

var count = 0;

for (var exponent = 1; exponent < 25; exponent++) {
    for (var base = 1; base < 10; base++) {
        var pow = bigInt.pow(base, exponent);
        if (pow.length === exponent) {
            count++;
        }
    }
}

console.log(count);
