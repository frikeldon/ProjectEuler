var values = [ '2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A' ];
var suits = [ 'S', 'H', 'C', 'D' ];

var hands = require('fs').readFileSync(require('path').join(__dirname, 'p054_poker.txt'));
hands = hands.toString().split('\n');
hands.pop();

function getCard(card) {
    return {
        value: values.indexOf(card[0]) + 2,
        suit: suits.indexOf(card[1])
    };
}

function getRepeatedValues(cards) {
    var repeated = [];
    var uncount = cards.slice();
    var current;
    var i;

    while (uncount.length > 0) {
        current = uncount.shift();
        current.count = 1;

        for (i = uncount.length - 1; i >= 0; i--) {
            if (uncount[i].value === current.value) {
                current.count++;
                uncount.splice(i, 1);
            }
        }

        repeated.push(current);
    }

    repeated.sort(function(a, b) {
        var diff = b.count - a.count;
        return diff !== 0 ? diff : b.value - a.value;
    });

    return repeated;
}

function isFlush(cards) {
    var suit = cards[0].suit;
    for (var i = 1; i < cards.length; i++) {
        if (cards[i].suit !== suit) return false;
    }
    return true;
}

function getHiStraightValue(cards) {
    cards = cards.slice();
    cards.sort(function(a, b) {
        return a.value - b.value;
    });

    for (var i = 1; i < cards.length; i++) {
        if (cards[i].value !== cards[i - 1].value + 1) {
            return;
        }
    }

    return cards[0].value;
}

function getHandScore(cards) {
    var obj = {
        repeatedValues: getRepeatedValues(cards),
        isFlush: isFlush(cards),
        hiStraightValue: getHiStraightValue(cards)
    };

    if (obj.hiStraightValue === 14 && obj.isFlush) {
        obj.score = 10;
    } else if (obj.hiStraightValue && obj.isFlush) {
        obj.score = 9;
    } else if (obj.repeatedValues[0].count === 4) {
        obj.score = 8;
    } else if (obj.repeatedValues[0].count === 3 && obj.repeatedValues[1].count === 2) {
        obj.score = 7;
    } else if (obj.isFlush) {
        obj.score = 6;
    } else if (obj.hiStraightValue) {
        obj.score = 5;
    } else if (obj.repeatedValues[0].count === 3) {
        obj.score = 4;
    } else if (obj.repeatedValues[0].count === 2 && obj.repeatedValues[1].count === 2) {
        obj.score = 3;
    } else if (obj.repeatedValues[0].count === 2) {
        obj.score = 2;
    } else {
        obj.score = 1;
    }

    return obj;
}

var winPlayer1 = 0;

hands.forEach(function(hand) {
    var shand = hand.split(' ').map(getCard);
    var hand1 = getHandScore(shand.slice(0, 5));
    var hand2 = getHandScore(shand.slice(5, 10));

    if (hand1.score > hand2.score) {
        winPlayer1++;
    } else if (hand1.score === hand2.score) {
        if (hand1.repeatedValues[0].value > hand2.repeatedValues[0].value) {
            winPlayer1++;
        } else if (hand1.repeatedValues[0].value === hand2.repeatedValues[0].value && hand1.repeatedValues[1].value > hand2.repeatedValues[1].value) {
            winPlayer1++;
        }
    }
});

console.log(winPlayer1);