fn is_divisible(number: usize) -> bool {
    for d in 2..=20 {
        if number % d != 0 {
            return false;
        }
    }
    true
}

fn main() {
    let mut current: usize = 10;

    loop {
        if is_divisible(current) {
            println!("{}", current);
            break;
        }
        current += 10;
    }
}
