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

exports.sum = sum;
