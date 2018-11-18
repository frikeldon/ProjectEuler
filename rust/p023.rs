use std::collections::HashSet;
use std::iter::FromIterator;
mod primes;
mod numbers;
use numbers::Factor;

fn sum_divisors(primes: &[usize], number: usize) -> usize {
    let factors = Factor::factorize(primes, number);
    let mut divisors = Factor::proper_divisors(&factors);
    divisors.pop();
    divisors.iter().sum()
}

fn is_sum_of_two_abundants(abundant: &[usize], abundant_set: &HashSet<&usize>, number: usize) -> bool {
    for &current in abundant {
        if current >= number {
            return false;
        }

        let pair = number - current;
        if abundant_set.contains(&pair) {
            return true;
        }
    }
    false
}

fn main() {
	let primes = primes::eratosthenes(100000);

    let abundant: Vec<usize> = (1..28123).into_iter()
        .filter(|&x| sum_divisors(&primes, x) > x)
        .collect::<Vec<usize>>();

    let abundant_set = HashSet::from_iter(abundant.iter());

    let result: usize = (1..28123).into_iter()
        .filter(|&x| !is_sum_of_two_abundants(&abundant, &abundant_set, x))
        .sum();
    println!("{}", result);
}
