function gerRecurrenceLength(numerator, denominator) {
    var div = Math.floor(numerator / denominator);
    var rest = numerator - (div * denominator);
    var foundRests = [ rest ];

    while (rest > 0) {
        rest = rest * 10;
        div = Math.floor(rest / denominator);
        rest = rest - (div * denominator);

        if (foundRests.indexOf(rest) > -1) {
            return foundRests.length - foundRests.indexOf(rest);
        } else {
            foundRests.push(rest);
        }
    }

    return 0;
}

var maxD = 1;
var maxRecurrence = 0;
var currentRecurrence;

for (var d = 1; d < 1000; d++) {
    currentRecurrence = gerRecurrenceLength(1, d);
    if (currentRecurrence > maxRecurrence) {
        maxD = d;
        maxRecurrence = currentRecurrence;
    }
}

console.log(maxD);