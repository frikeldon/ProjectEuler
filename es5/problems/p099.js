var exponents = require('fs').readFileSync(require('path').join(__dirname, 'p099_base_exp.txt'));
exponents = exponents.toString().split('\n').map(function(element) { return element.split(','); });

var maxValue = Number.MIN_SAFE_INTEGER;
var response;

exponents.forEach(function(exponent, index) {
    var current = parseInt(exponent[1], 10) * Math.log(parseInt(exponent[0], 10));
    if (current > maxValue) {
        maxValue = current;
        response = index + 1;
    }
});

console.log(response);
