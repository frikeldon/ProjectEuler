fn digits_of_fibonacci(number: usize) -> usize {
    let log_phi = ((5f32.sqrt() + 1f32) / 2f32).log10();
    let log_sqrt5 = 5f32.log10() / 2f32;
    (((number as f32 * log_phi) - log_sqrt5).floor() + 1f32) as usize
}

fn main() {
    let result = (1..).into_iter()
        .find(|&x| digits_of_fibonacci(x) >= 1000)
        .unwrap();
    println!("{}", result);
}
