function factorial(num) {
    var result = 1;
    for (var i = 2; i <= num; i++) {
        result *= i;
    }
    return result;
}

var items = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ];
var length = items.length;
var element = 1000000 - 1;
var i;
var perms;
var current;
var result = '';

for (i = 0; i < length; i++) {
    perms = factorial(items.length - 1);
    current = Math.floor(element / perms);
    element = element % perms;
    result = result + items.splice(current, 1)[0].toString();
    if (element === 0) {
        result = result + items.join('');
        break;
    }
}

console.log(result);
