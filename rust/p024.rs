fn factorial(number: usize) -> usize {
    (2..=number).into_iter()
        .fold(1, |acc, x| acc * x)
}

fn main() {
    let mut items = vec![ '0', '1', '2', '3', '4', '5', '6', '7', '8', '9' ];
    let mut result = String::new();
    let mut position: usize = 1000000 - 1;

    for _i in 0..items.len() {
        let permutations = factorial(items.len() - 1);
        let current: usize = position / permutations;
        position = position % permutations;
        result.push(items.remove(current));

        if position == 0 {
            items.drain(..).for_each(|c| result.push(c));
            break;
        }
    }

    println!("{}", result);
}
