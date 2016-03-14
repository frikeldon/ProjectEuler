function isRightTriangle(c1, c2, h) {
    return (c1 * c1) + (c2 * c2) === (h * h);
}

var results = [ -1, -1, -1];

var count;
var p, c1, c2, h;

for (p = results.length; p < 1000; p++) {
    count = 0;
    for (h = 1; h < p - 2; h++) {
        for (c1 = 1; c1 < p - h; c1++) {
            c2 = p - (h + c1);
            if (isRightTriangle(c1, c2, h)) {
                count++;
            }
        }
    }
    results[p] = count;
}

console.log(results.reduce(function(previousValue, currentValue, index, array) {
    if (currentValue > array[previousValue]) {
        return index;
    } else {
        return previousValue;
    }
}, 0));
