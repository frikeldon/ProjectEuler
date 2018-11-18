mod primes;
mod numbers;

use numbers::Factor;

fn main() {
    let primes = primes::eratosthenes(10000000);

    let mut current = 1;
    let mut counter = 1;

    loop {
        counter += 1;
        current += counter;
        let factors = Factor::factorize(&primes, current);
        let count = Factor::get_num_factors(&factors);

        if count > 500 {
            println!("{}", current);
            break;
        }
    }
}
