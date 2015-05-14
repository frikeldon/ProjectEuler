function sum() {
    if(arguments.length === 0) {
        return '0';
    }
    if(arguments.length === 1) {
        return arguments[0].toString();
    }

    var numbers = Array.prototype.slice.call(arguments);
    var maxLength = 0;
    var result = '';
    var current = 0;
    var stepSize = 5;
    var i;

    for(i = 0; i < numbers.length; i++) {
        numbers[i] = numbers[i].toString();
        maxLength = Math.max(maxLength, numbers[i].length);
    }

    while(maxLength > 0) {
        for(i = 0; i < numbers.length; i++) {
            current += parseInt(numbers[i].slice(-stepSize), 10);
            numbers[i] = numbers[i].slice(0, -stepSize);
        }

        current = current.toString();
        result = current.slice(-stepSize) + result;
        current = parseInt(current.slice(0, -stepSize), 10);

        maxLength -= stepSize;

    }

    return (current === 0 ? '' : current.toString()) + result;
}

function mul() {
    if(arguments.length === 0) {
        return '0';
    }
    if(arguments.length === 1) {
        return arguments[0].toString();
    }
    if(arguments.length > 2) {
        return mul(arguments[0].toString(), mul.apply(this, Array.prototype.slice.call(arguments, 1)));
    }

    var a = arguments[0].toString().split('').reverse().join('');
    var b = arguments[1].toString().split('').reverse().join('');
    var result = [];
    var carry;
    var digit;
    var aLength;
    var i, j;

    for (i = 0; i < b.length; i++) {
        carry = 0;
        aLength = a.length + i;

        for (j = i; j < aLength; j++) {
            digit = (result[j] || 0) + (parseInt(b[i], 10) * parseInt(a[j - i], 10)) + carry;
            carry = Math.floor(digit / 10); // New carry
            result[j] = digit % 10;
        }

        if (carry) {
            digit = (result[j] || 0) + carry;
            carry = Math.floor(digit / 10);
            result[j] = digit % 10;
        }
    }

    return result.reverse().join('');
}

function pow(base, exp) {
    var prod = '1';

    while (exp > 0) {
        if ((exp & 1) != 0) {
            prod = mul(base, prod);
        }
        base = mul(base, base);
        exp = exp >> 1;
    }

    return prod;
}

exports.sum = sum;
exports.mul = mul;
exports.pow = pow;
