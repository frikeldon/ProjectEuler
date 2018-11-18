use std::collections::HashSet;
mod primes;
mod numbers;

use numbers::Factor;

fn pow_factors(factors: &[Factor], exponent: usize) -> Vec<Factor> {
    factors.iter()
        .map(|f| Factor {
            base: f.base,
            exponent: f.exponent * exponent,
        })
        .collect()
}

fn factors_to_string(factors: &[Factor]) -> String {
    factors.iter()
        .map(|f| format!("{}^{}", f.base, f.exponent))
        .collect::<Vec<String>>()
        .join(",")
}

fn main() {
    let primes = primes::eratosthenes(10000000);
    let mut powers: HashSet<String> = HashSet::new();

    for a in 2..=100 {
        let factors = Factor::factorize(&primes, a);
        for b in 2..=100 {
            let current = factors_to_string(&pow_factors(&factors, b));
            powers.insert(current);
        }
    }

    println!("{}", powers.len());
}
