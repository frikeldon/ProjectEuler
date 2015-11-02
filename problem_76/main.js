function findWays(value, maxAddend) {
    if (value < 1) {
        return 0;
    }
    if (value === 1) {
        return maxAddend > 0 ? 1 : 0;
    }

    var ways = 0;
    var amount;
    
    for (var currentAddend = maxAddend; currentAddend > 0; currentAddend--) {
        amount = currentAddend;

        while (amount <= value) {
            if (amount === value) {
                ways++;
            } else {
                ways += findWays(value - amount, currentAddend - 1);
            }
            amount += currentAddend;
        }
    }

    return ways;
}

console.log(findWays(100, 99));
