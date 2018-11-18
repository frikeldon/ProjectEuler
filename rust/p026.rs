use std::collections::HashMap;

fn get_recurrence_length(numerator: usize, denominator: usize) -> usize {
    let mut rest = numerator;
    let mut found_rests: HashMap<usize, usize> = HashMap::new();
    let mut position = 0usize;

    while rest > 0 {
        rest = rest % denominator;

        if found_rests.contains_key(&rest) {
            return found_rests.len() - found_rests.get(&rest).unwrap();
        } else {
            found_rests.insert(rest, position);
            position += 1;
        }

        rest *= 10;
    }
    0
}

fn main() {
    let result = (1..1000).into_iter()
        .map(|d| (d, get_recurrence_length(1, d)))
        .max_by(|x, y| x.1.cmp(&y.1))
       .unwrap();

    println!("{}", result.0);
}
