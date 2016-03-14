function collatz(current) {
    return current % 2 === 0 ? current / 2 : (current * 3) + 1;
}

var sequences = {
    '1': 1,
    '2': 2
};

function followSequence(initial) {
    if (!sequences[initial]) {
        sequences[initial] = followSequence(collatz(initial)) + 1;
    }
    return sequences[initial];
}

for (var i = 3; i < 1000000; i++) {
    followSequence(i);
}

var maxStarting = -1;
var maxLength = -1;

for(var starting in sequences) {
    if(sequences[starting] > maxLength) {
        maxLength = sequences[starting];
        maxStarting = starting;
    }
}

console.log(maxStarting);