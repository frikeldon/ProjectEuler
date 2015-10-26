/*jshint loopfunc: true */

var samples = require('fs').readFileSync(require('path').join(__dirname, 'p079_keylog.txt'));
samples = samples.toString().split('\n').filter(function(e) { return !!e; });

var digits = [];
function addNums(digit, position) {
    var nums = Array.prototype.slice.call(arguments, 2);

    var current = digits.find(function(element) {
        return element.digit == digit;
    });

    if (!current) {
        current = {
            digit: digit,
            pre: [],
            pos:[]
        };
        digits.push(current);
    }

    var array = current[position];

    nums.forEach(function(num) {
        if (array.indexOf(num) === -1) {
            array.push(num);
        }
    });
}

samples.forEach(function(keys) {
    var d1 = keys[0];
    var d2 = keys[1];
    var d3 = keys[2];

    addNums(d1, 'pos', d2, d3);

    addNums(d2, 'pre', d1);
    addNums(d2, 'pos', d3);

    addNums(d3, 'pre', d1, d2);
});

var key = [];

while (digits.length > 0) {

    var first = digits.find(function(element) {
        return element.pre.length === 0;
    });

    digits.splice(digits.indexOf(first), 1);

    key.push(first.digit);

    digits.forEach(function(element) {
        var indexOf = element.pre.indexOf(first.digit);
        if (indexOf > -1) {
            element.pre.splice(element.pre.indexOf(first.digit), 1);
        }
    });
}

console.log(key.join(''));
