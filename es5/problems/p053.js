var combinatorics = require('../utils/combinatorics');

var count = 0;
var n, r;

for (n = 2; n <= 100; n++) {
    for (r = n -1; r > 0; r--) {
        if (combinatorics.getCombinatoricCount(n, r) > 1000000) {
            count += 1;
        }
    }
}

console.log(count);