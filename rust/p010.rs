mod primes;

fn main() {
	let primes = primes::eratosthenes(2000000);
    let result = primes.iter()
        .fold(0, |acc, c| acc + c);

    println!("{}", result);
}

