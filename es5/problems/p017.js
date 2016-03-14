function numToText(num) {
    var units, tens, hundreds;
    if (num < 0) {
        return '';
    }

    if (num < 14) {
        return ([ '', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen' ])[num];
    }

    if (num < 20) {
        if (num === 15) {
            return 'fifteen';
        } else if (num === 18) {
            return 'eighteen';
        } else {
            return numToText(num % 10) + 'teen';
        }
    }

    if (num < 100) {
        tens = ([ 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety' ])[Math.floor(num / 10) - 2];
        units = numToText(num % 10);
        return tens + (units ? '-' + units : '');
    }

    if (num < 1000) {
        hundreds = numToText(Math.floor(num / 100)) + ' hundred';
        tens = numToText(num % 100);
        return hundreds + (tens ? ' and ' + tens : '');
    }

    if (num === 1000) {
        return 'one thousand';
    }
}

var result = 0;

for (var i = 1; i <= 1000; i++) {
    result += numToText(i).replace(/\s|\-/g, '').length;
}
console.log(result);
