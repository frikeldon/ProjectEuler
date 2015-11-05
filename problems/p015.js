var matrix = new Array(21);
var i, j;

for (i = 0; i < matrix.length; i++) {
    matrix[i] = new Array(21);
}

for (i = 0; i < matrix.length; i++) {
    matrix[i][matrix.length-1] = 1;
    matrix[matrix.length-1][i] = 1;
}

for (i = matrix.length - 2; i >= 0; i--) {
    for(j = matrix.length - 2; j >= 0; j--) {
        matrix[i][j] = matrix[i + 1][j] + matrix[i][j + 1];
    }
}

console.log(matrix[0][0]);
