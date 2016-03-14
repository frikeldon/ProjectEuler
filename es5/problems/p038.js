function concatenatedProduct(num) {
    var cp = '';
    var i = 1;
    while (cp.length < 9) {
        cp += (num * i).toString();
        i++;
    }
    return cp;
}

function isPandigitalProduct(number) {
    return number.toString().split('').sort().join('') === '123456789';
}

var found = [];
var cp;

for (var i = 2; i < 10000; i++) {
    if (isPandigitalProduct(concatenatedProduct(i))) {
        found.push(parseInt(concatenatedProduct(i), 10));
    }
}

console.log(Math.max.apply(Math, found));
