function powMod(mod, base, exp) {
    var prod = 1;
    var baseMod = base % mod;

    for (var i = 0; i < exp; i++) {
        prod = ((prod % mod) * baseMod) % mod;
    }

    return prod;
}

function sumMod(mod, num1, num2) {
    return ((num1 % mod) + (num2 % mod)) % mod;
}


var modConst = 10000000000;
var sum = 0;

for (var i = 1; i <= 1000; i++) {
    sum = sumMod(modConst, sum, powMod(modConst, i, i));
}

console.log(sum);
