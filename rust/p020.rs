mod big_int;

fn main() {
    let mut fact = big_int::from_u32(1);

    for i in 2..=100 {
        fact = big_int::mul(&fact, &big_int::from_u32(i));
    }

    let result = fact.to_string()
        .chars()
        .map(|c| c as i32 - '0' as i32)
        .fold(0, |acc, d| acc + d);

    println!("{}", result);
}
