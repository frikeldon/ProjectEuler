var bigInt = require('../utils/bigInt');

function getPellNumbers(initial2, initial1) {
    var last2 = initial2;
    var last1 = initial1;

    return function() {
        var current = bigInt.sum(bigInt.mul(2, last1), last2);
        last2 = last1;
        last1 = current;
        return current;
    };
}


var numerator = getPellNumbers(1, 1);
var denominator = getPellNumbers(0, 1);

var count = 0;

for (var i = 0; i < 1000; i++) {
    if (numerator().length > denominator().length) {
        count++;
    }
}

console.log(count);
