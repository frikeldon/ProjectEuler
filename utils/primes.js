var primes = [2, 3];
var lastCheck = 5;

function checkPrimeNumber(num) {
	var max = Math.ceil(Math.sqrt(num));
	var length = primes.length;
	var current;

	for(var i = 0; i < length; i++) {
		current = primes[i];
		if(num % current === 0) {
			return false;
		}
		if(current > max) {
			break;
		}
	}

	return true;
}

function checkPrimesTo(num) {
	for(; lastCheck <= num; lastCheck += 2) {
		if(checkPrimeNumber(lastCheck)) {
			primes.push(lastCheck);
		}
	}
}

function calculatePrimes(amount) {
	while(primes.length <= amount) {
		if(checkPrimeNumber(lastCheck)) {
			primes.push(lastCheck);
		}
		lastCheck += 2;
	}
}

function isPrime(num) {
	if(num >= lastCheck) {
		checkPrimesTo(num);
	}

	return primes.indexOf(num) >= 0;
}

function getPrimeIterator() {
    var pointer = -1;
    if (typeof arguments[0] === 'number') {
        pointer = arguments[0];
        calculatePrimes(pointer + 1);
    }
    var instance = {
        next: function() {
            pointer++;
            calculatePrimes(pointer + 1);
            return primes[pointer];
        }
    };
    Object.defineProperty(instance, 'value', {
        get: function() {
            if (pointer >= 0 && pointer < primes.length) {
                return primes[pointer];
            }
        }
    });
    Object.defineProperty(instance, 'index', {
        get: function() {
            return pointer;
        }
    });
    return instance;
}

exports.primes = primes;
exports.isPrime = isPrime;
exports.checkPrimesTo = checkPrimesTo;
exports.calculatePrimes = calculatePrimes;
exports.getPrimeIterator = getPrimeIterator;
