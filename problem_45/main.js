var number = require('../utils/number');

function getHexagonal(n) {
    return n * ((2 * n) - 1);
}

var n = 143 + 1;
var found;
var current;

while (!found) {
    current = getHexagonal(n++);
    if (number.isTriangular(current) && number.isPentagonal(current)) {
        found = current;
    }
}

console.log(current);