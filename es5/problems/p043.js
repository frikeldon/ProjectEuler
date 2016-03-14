var combinatorics = require('../utils/combinatorics');

var i = combinatorics.getPermutations([ '0', '1', '2', '3', '4', '5', '6', '7', '8', '9']);
var current;
var sum = 0;

function test(current, index, divisible) {
    var num = parseInt(current.slice(index - 1, index + 2).join(''), 10);
    return num % divisible === 0;
}

do {
    current = i.value;

    if (
        test(current, 2, 2) &&
        test(current, 3, 3) &&
        test(current, 4, 5) &&
        test(current, 5, 7) &&
        test(current, 6, 11) &&
        test(current, 7, 13) &&
        test(current, 8, 17)
    ) {
        sum += parseInt(current.join(''), 10);
    }
} while (i.next());

console.log(sum);
