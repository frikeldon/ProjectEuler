function mul(a, b) {
    var mod = 10000000000;
    return ((a % mod) * (b % mod)) % mod;
}

function pow(base, exp) {
    var prod = '1';

    while (exp > 0) {
        if ((exp & 1) !== 0) {
            prod = mul(base, prod);
        }
        base = mul(base, base);
        exp = exp >> 1;
    }

    return prod;
}

console.log(mul(28433, pow(2, 7830457)) + 1);
