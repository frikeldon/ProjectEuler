function hasSameDigits() {
    var base = arguments[0].toString().split('').sort().join('');
    for (var i = 1; i < arguments.length; i++) {
        var comp = arguments[i].toString();
        if (comp.length !== base.length) {
            return false;
        }
        comp = comp.split('').sort().join('');
        if (base !== comp) {
            return false;
        }
    }
    return true;
}

var i = 1;

while (!hasSameDigits(i, i*2, i*3, i*4, i*5, i*6)) i++;

console.log(i);
