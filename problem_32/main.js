function isPandigitalProduct(multiplicand, multiplier, product) {
    var num = multiplicand.toString() + multiplier.toString() + product.toString();
    num = num.split('').sort().join('');
    return num === '123456789';
}

var found = [];
var a;
var b;
var c;

for (a = 1; a < 100; a++) {
    for (b = 1; b < 10000; b++) {
        c = a * b;
        if (isPandigitalProduct(a, b, c) && found.indexOf(c) < 0) {
            found.push(c);
        }
    }
}

console.log(found.reduce(function(a, b) { return a + b; }, 0));
