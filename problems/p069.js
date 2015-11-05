var number = require('../utils/number');

var maxRatio = 0;
var found;

for (var n = 2; n <= 1000000; n++) {
    var phi = number.phi(n);
    if (maxRatio < (n / phi)) {
        maxRatio = n / phi;
        found = n;
    }
}

console.log(found);
