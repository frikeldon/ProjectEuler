var number = require('../utils/number');

function getCommonDigits(a, b) {
    var common = [];
    var arrA = a.split('');
    var arrB = b.split('');
    for (var i = 0; i < arrA.length; i++) {
        if (arrA[i] !== '0' && arrB.indexOf(arrA[i]) > -1) {
            common.push(arrA[i]);
        }
    }
    return common;
}

function isDigitCancellingFraction(numerator, denominator) {
    var response = {
        found: false
    };
    var commonDigits = getCommonDigits(numerator, denominator);

    commonDigits.forEach(function(digit) {
        var rn = parseInt((sn.replace(digit, '') || 1), 10);
        var rd = parseInt((sd.replace(digit, '') || 1), 10);

        if (rn / n === rd / d) {
            response.found = true;
            response.numerator = rn;
            response.denominator = rd;
        }
    });

    return response;
}

var n, d;
var sn, sd;
var response;
var foundNumerator = 1;
var foundDenominator = 1;

for (n = 10; n < 100; n++) {
    var sn = n.toString();
    for (d = n+1; d < 100; d++) {
        var sd = d.toString();
        response = isDigitCancellingFraction(sn, sd);
        if (response.found) {
            foundNumerator *= response.numerator;
            foundDenominator *= response.denominator;
        }
    }
}

var gcd = number.greatestCommonDivisor(foundNumerator, foundDenominator);
console.log(foundDenominator / gcd);
