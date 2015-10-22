var number = require('../utils/number');

function contains(array, factor) {
    for (var i = 0; i < array.length; i++) {
        if (array[i].base === factor.base && array[i].exponent === factor.exponent) {
            return true;
        }
    }
    return false;
}

function checkSerie(num, length) {
    var factors = [];
    var newFactors;
    var i, j;
    
    for (i = 0; i < length; i++) {
        newFactors = number.factorization(num + i);
        if (newFactors.length !== length) {
            return false;
        }
        for (j = 0; j < length; j++) {
            if (contains(factors, newFactors[j])) {
                return false;
            }
        }
        Array.prototype.push.apply(factors, newFactors);
    }

    return true;
}

var num = 1;

while(!checkSerie(num, 4)) { num += 1; }

console.log(num);
