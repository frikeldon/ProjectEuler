mod primes;

fn main() {
    let number = 600851475143;
    let limit = (number as f32).sqrt().floor() as i64;
	let primes = primes::eratosthenes(limit);
    let result = primes.iter()
        .rev()
        .find(|&p| number % p == 0)
        .unwrap();

    println!("{}", result);
}