use std::collections::HashSet;
use std::iter::FromIterator;
mod primes;

fn quadratic_length(primes: &HashSet<&usize>, a: isize, b: isize) -> isize {
    let mut n = 0;
    loop {
        let quadratic = (((n + a) * n) + b) as usize;
        if !primes.contains(&quadratic) {
            break;
        }
        n += 1;
    }
    n
}

fn main() {
	let primes = primes::eratosthenes(250000);
    let primes_set = HashSet::from_iter(primes.iter());
    let mut result: (isize, isize, isize) = (0, 0, -1);

    for a in -999..1000isize {
        for b in -999..=1000isize {
            if primes_set.contains(&(b as usize)) {
                let length = quadratic_length(&primes_set, a, b);
                if length > result.2 {
                    result = (a, b, length);
                }
            }
        }
    }

    println!("{}", result.0 * result.1);
}
