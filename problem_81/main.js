var matrix = require('fs').readFileSync(require('path').join(__dirname, 'p081_matrix.txt'));
matrix = matrix.toString().split('\n').map(function(element) { return element.split(','); });
matrix.pop();

var x, y;

for (y = 0; y < matrix.length; y++) {
    for (x = 0; x < matrix[y].length; x++) {
        matrix[y][x] = parseInt(matrix[y][x], 10);
    }
}

var getNum = function(x, y) {
    if (y < 0 || y >= matrix.length) {
        return Number.MAX_SAFE_INTEGER;
    }

    if (x < 0 || x >= matrix[y].length) {
        return Number.MAX_SAFE_INTEGER;
    }

    return matrix[y][x];
};

var lastR = matrix.length - 1;
var lastC = matrix[lastR].length - 1;

for (y = lastR; y >= 0; y--) {
    for (x = lastC; x >= 0; x--) {
        if (y === lastR && x === lastC) {
            continue;
        }
        matrix[y][x] += Math.min(getNum(x + 1, y), getNum(x, y + 1));
    }
}

console.log(matrix[0][0]);
