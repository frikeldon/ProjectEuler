var pow5 = {};
var i;

for (i = 0; i < 10; i++) {
    pow5[i] = Math.pow(i, 5);
}

var found = 0;

function sumPows(previous, current) {
    return previous + pow5[current];
}

for (i = 2; i < 1000000; i++) {
    if (i === i.toString().split('').reduce(sumPows, 0)) {
        found += i;
    }
}

console.log(found);
