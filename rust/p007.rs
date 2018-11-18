mod primes;

fn main() {
	let primes = primes::eratosthenes(250000);
    println!("{}", primes[10000]);
}
