var primes = require('./primes');

function factorization(number) {

    if (number === 1) {
        return [{
            'base': 1,
            'exponent': 1
        }];
    }

    if (primes.isPrime(number)) {
        return [{
            'base': number,
            'exponent': 1
        }];
    }

    var factors = [];
    var current;
    var exponent;

    for (var i = 0; number > 1; i++) {
        current = primes.primes[i];
        exponent = 0;
        while (number % current === 0) {
            exponent++;
            number /= current;
        }
        if (exponent > 0) {
            factors.push({
            'base': current,
            'exponent': exponent
            });
        }
    }

    return factors;

}

function properDivisors(number) {
    var factors = factorization(number);

    var combineFactors = function() {
        var result = [];
        var factor, combinations, current, temp;
        var i, j;

        if (arguments.length === 0) {
            return result;
        }

        factor = arguments[0];

        if (arguments.length === 1) {
            for (i = 0; i <= factor.exponent; i++) {
                temp = Math.pow(factor.base, i);
                if (result.indexOf(temp) < 0) {
                    result.push(temp);
                }
            }
            return result;
        }

        combinations = combineFactors.apply(this, Array.prototype.slice.call(arguments, 1));

        for (i = 0; i <= factor.exponent; i++) {
            current = Math.pow(factor.base, i);
            for (j = 0; j < combinations.length; j++) {
                temp = current * combinations[j];
                if (result.indexOf(temp) < 0) {
                    result.push(temp);
                }
            }
        }

        return result;
    };

    return combineFactors.apply(this, factors).sort(function(a,b) { return a - b; });
}

function numberOfDivisors(number) {
    var factors = factorization(number);
    return factors.reduce(function(previousValue, currentValue) {
        return previousValue * (currentValue.exponent + 1);
    }, 1);
}

function greatestCommonDivisor(numerator, denominator) {
    var divNum = properDivisors(numerator);
    var divDen = properDivisors(denominator);

    var common = [];
    for (var i = divNum.length - 1; i >= 0; i--) {
        if (divDen.indexOf(divNum[i]) > -1) {
            return divNum[i];
        }
    }

    return 1;
}

function isPalindrome(num) {
	num = num.toString();
	var length = Math.floor(num.length / 2);
	var last = num.length - 1;
	for(var i = 0; i < length; i++) {
		if(num.charAt(i) !== num.charAt(last - i)) {
			return false;
		}
	}
	return true;
}

function isTriangular(number) {
    var n = Math.floor(Math.sqrt(number * 2));
    if (number === (n * (n + 1)) / 2) {
        return n;
    }
    return -1;
}

function isPentagonal(number) {
    return (1 + Math.sqrt((24 * number) + 1)) % 6 === 0;
}

function isPentagonal(number) {
    return (1 + Math.sqrt((24 * number) + 1)) % 6 === 0;
}

exports.factorization = factorization;
exports.properDivisors = properDivisors;
exports.numberOfDivisors = numberOfDivisors;
exports.greatestCommonDivisor = greatestCommonDivisor;
exports.isPalindrome = isPalindrome;
exports.isTriangular = isTriangular;
exports.isPentagonal = isPentagonal;
