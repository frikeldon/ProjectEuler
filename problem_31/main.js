var coins = [ 1, 2, 5, 10, 20, 50, 100, 200 ];

function getWays(amount, coins) {
    if (amount === 0) {
        return 1;
    }
    if (coins.length === 0) {
        return 0;
    }

    var currentValue = coins.slice(-1)[0];
    var remainingCoins = coins.slice(0, -1);
    var ways = 0;

    for (var count = Math.floor(amount / currentValue); count >= 0; count--) {
        ways += getWays(amount - (currentValue * count), remainingCoins);
    }

    return ways;
}

console.log(getWays(200, coins));