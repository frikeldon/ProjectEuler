var bigInt = require('../utils/bigInt');

function checkPattern(strNum) {
    var sample = '0_9_8_7_6_5_4_3_2_1';

    if (strNum.length !== sample.length) {
        return false;
    }

    strNum = strNum.split('').reverse().join('');

    for (var i = 0; i < strNum.length; i += 2) {
        if (strNum[i] !== sample[i]) return false;
    }

    return true;
}

var num = 1389026630;

while (!checkPattern(bigInt.mul(num, num))) {
    num -= 20;
}

console.log(num);
