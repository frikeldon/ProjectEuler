var trigrams = [
    'the',
    'and',
    'tha',
    'ent',
    'ing',
    'ion',
    'tio',
    'for',
    'nde',
    'has',
    'nce',
    'edt',
    'tis',
    'oft',
    'sth',
    'men'
];

var letters = [];
for (var i = 'a'.charCodeAt(0); i <= 'z'.charCodeAt(0); i++) {
    letters.push(i);
}

var characters = require('fs').readFileSync(require('path').join(__dirname, 'p059_cipher.txt'));
characters = characters.toString().split(',').map(function(element) { return parseInt(element, 10); });

function checkTrigram(k1, k2, k3, textIndex) {
    var trigram =
        String.fromCharCode(k1 ^ characters[textIndex]) +
        String.fromCharCode(k2 ^ characters[textIndex + 1]) +
        String.fromCharCode(k3 ^ characters[textIndex + 2]);

    return trigrams.indexOf(trigram.toLowerCase()) > -1;
}

function hasNonPrintableChars(key) {
    var current;
    var response = false;

    for (var i = 0; i < characters.length; i++) {
        current = key[i % 3] ^ characters[i];
        if (!((current >= 32 && current <= 126) || current === 10 || current === 13)) {
            return true;
        }
    }

    return false;
}

var i1, i2, i3;
var t;
var trigramsFound;

var maxTrigramsFound = 0;
var currentKey;

for (i1 = 0; i1 < letters.length; i1++) {
    for (i2 = 0; i2 < letters.length; i2++) {
        for (i3 = 0; i3 < letters.length; i3++) {

            if (hasNonPrintableChars([ letters[i1], letters[i2], letters[i3] ])) {
                continue;
            }

            trigramsFound = 0;

            for (t = 0; t < characters.length - 2; t++) {

                if (checkTrigram(letters[i1], letters[i2], letters[i3], t)) {
                    trigramsFound++;
                }

            }

            if (trigramsFound > maxTrigramsFound) {
                maxTrigramsFound = trigramsFound;
                currentKey = [
                    letters[i1],
                    letters[i2],
                    letters[i3]
                ];
            }

        }
    }
}

console.log(characters.reduce(function(previousValue, currentValue, index) {
    var key = currentKey[index % 3];
    return previousValue + (currentValue ^ key);
}, 0));
