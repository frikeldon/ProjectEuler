mod primes;
mod numbers;

use numbers::Factor;

fn sum_divisors(primes: &[usize], num: usize) -> usize {
    if num < 2 {
        return num;
    }

    let factors = Factor::factorize(primes, num);
    let sum: usize = Factor::proper_divisors(&factors)
        .iter()
        .sum();
    sum - num
}

fn main() {
    let primes = primes::eratosthenes(100000);
    let mut result = 0;

    for num in 2..10000 {
        let amicable = sum_divisors(&primes, num);
        if num != amicable && num == sum_divisors(&primes, amicable) {
            result += num;
        }
    }

    println!("{}", result);
}
