var fs = require('fs');
var path = require('path');
var number = require('../utils/number');

var words = fs.readFileSync(path.join(__dirname, 'p042_words.txt'));
words = words.toString().replace(/\"/g, '').split(',');

var A = 'A'.charCodeAt(0) - 1;

console.log(words.map(function(word) {
    return word.split('').map(function(char) {
        return char.charCodeAt(0) - A;
    }).reduce(function(previous, current) {
        return previous + current;
    }, 0);
}).reduce(function(previous, current) {
    if (number.isTriangular(current) > -1) {
        return previous + 1;
    }
    return previous;
}, 0));