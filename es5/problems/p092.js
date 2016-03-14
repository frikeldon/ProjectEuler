function chainEndsWith(num) {
    var calcChain = function(previousValue, currentValue) {
        var current = parseInt(currentValue, 10);
        return previousValue + (current * current);
    };

    while (num != 1 && num != 89) {
        num = num.toString().split('').reduce(calcChain, 0);
    }

    return num;
}

var count = 0;

for (var i = 1; i < 10000000; i++) {
    if (chainEndsWith(i) === 89) {
        count++;
    }
}

console.log(count);
