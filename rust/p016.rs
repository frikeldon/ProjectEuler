mod big_int;

fn main() {
    let text = big_int::pow(&big_int::from_string("2"), 1000).to_string();

    let result = text.chars()
        .map(|c| c as i32 - '0' as i32)
        .fold(0, |acc, d| acc + d);

    println!("{}",result);
}
