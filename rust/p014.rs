use std::collections::HashMap;

fn collatz(current: usize) -> usize {
    match current % 2 {
        0 => current / 2,
        1 => (3 * current) + 1,
        _ => 1
    }
}

fn calc_collatz_length(lengths: &mut HashMap<usize, usize>, number: usize) -> usize {
    if !lengths.contains_key(&number) {
        let next = collatz(number);

        let prev_length = if !lengths.contains_key(&next) {
            calc_collatz_length(lengths, next)
        } else {
            *lengths.get(&next).unwrap()
        };

        let length = 1 + prev_length;
        lengths.insert(number, length);
        length
    } else {
        *lengths.get(&number).unwrap()
    }
}

fn main() {
    const LIMIT: usize = 1000000;

    let mut lengths: HashMap<usize, usize> = HashMap::new();
    lengths.insert(1, 1);

    let mut result: usize = 1;
    let mut length: usize = 1;

    for x in 2..=LIMIT {
        let new_length = calc_collatz_length(&mut lengths, x);

        if new_length > length {
            length = new_length;
            result = x;
        }
    }

    println!("{:?}", result);
}
