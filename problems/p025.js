var ln10 = Math.log(10);

function log10(num) {
    return Math.log(num) / ln10;
}

var logPhi = log10((Math.sqrt(5) + 1) / 2);
var logSqrt5 = log10(5) / 2;

function digitsOfFibonacciNumber(i) {
    return Math.floor((i * logPhi) - logSqrt5) + 1;
}

var index = 0;
var digits;

do {
    digits = digitsOfFibonacciNumber(++index);
} while(digits < 1000);

console.log(index);
