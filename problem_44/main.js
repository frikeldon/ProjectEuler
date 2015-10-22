var number = require('../utils/number');

var numbers = (function(size) {
    var num = [];
    size++;
    for (var i = 1; i < size; i++) {
        num.push((i * ((3 * i) - 1)) / 2);
    }
    return num;
})(20000);

var found = Number.MAX_SAFE_INTEGER;
var maxCalc = numbers.slice(-1)[0];

var i, j;
var sum, dif;
for (i = 0; i < numbers.length; i++) {
    for (j = i + 1; j < numbers.length; j++) {
        sum = numbers[j] + numbers[i];
        dif = numbers[j] - numbers[i];
        if (number.isPentagonal(sum) && number.isPentagonal(dif)) {
            if (dif < found) {
                found = dif;
            }
        }
    }
}

console.log(found);
