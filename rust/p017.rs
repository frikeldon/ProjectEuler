mod numbers;

fn main() {
    let mut text = String::new();

    for i in 1..=1000 {
        text.push_str(&numbers::number_to_text(i));
    }

    let result = text.chars()
        .filter(|&c| c != ' ' && c != '-')
        .count();

    println!("{}", result);
}
