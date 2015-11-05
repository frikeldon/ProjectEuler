var factorials = {};
var i;

function factorial(num) {
    var response = 1;
    for (var i = num; i > 0; i--) {
        response *= i;
    }
    return response;
}

for (i = 0; i < 10; i++) {
    factorials[i.toString()] = factorial(i);
}

function sumFactorial(num) {
    var sum = 0;
    num.toString().split('').forEach(function(d) { sum += factorials[d]; });
    return sum;
}

var response = 0;

for (i = 3; i < 1000000; i++) {
    if (i === sumFactorial(i)) {
        response += i;
    }
}

console.log(response);