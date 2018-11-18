pub fn eratosthenes(limit: i64) -> Vec<usize> {
    let capacity = (limit as usize) + 1;
    let mut numbers = vec![true; capacity];
    let mut primes: Vec<usize> = Vec::new();

    for n in 2..capacity {
        if numbers[n] == false {
            continue;
        }

        primes.push(n);

        for m in (n*2..capacity).step_by(n) {
            numbers[m] = false;
        }
    }

    primes
}