var fraction = '.';
var num = 1;

while (fraction.length < 1000001) fraction += (num++).toString();

var response = 1;

for (num = 1; num < 1000001; num *= 10) {
    response *= parseInt(fraction[num], 10);
}

console.log(response);
