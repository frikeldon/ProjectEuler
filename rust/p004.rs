mod numbers;

fn main() {
    let mut found: usize = 0;

    for n1 in 100..1000 {
        for n2 in n1..1000 {
            let mul = n1 * n2;
            if mul > found && numbers::is_palindrome(mul) {
                found = mul;
            }
        }
    }

    println!("{}", found);
}
