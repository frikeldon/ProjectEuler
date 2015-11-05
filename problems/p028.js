var steps = (1001 - 1) / 2;
var sum = 1;
var current = 1;

var size = 2;

for (var i = 0; i < steps; i++) {
    for (var sides = 0; sides < 4; sides++) {
        current += size;
        sum += current;
    }
    size += 2;
}

console.log(sum);