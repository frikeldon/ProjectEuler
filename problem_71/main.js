var top = 3/7;

var current;
var maxFound = 0;
var nFound;

var d, n;

for (d = 2; d < 1000000; d++) {
    for (n = Math.max(1, Math.floor(d * top) - 10); n < d; n++) {
        current = n / d;
        if (current >= top) {
            break;
        }
        if (current > maxFound) {
            maxFound = current;
            nFound = n;
        }
    }
}

console.log(nFound);