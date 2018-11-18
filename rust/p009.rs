fn main() {
    for a in 2..999 {
        let a2 = a * a;
        for b in 1..(1000-a) {
            let c = 1000 - a - b;

            let b2 = b * b;
            let c2 = c * c;

            if a2 + b2 == c2 {
                println!("{}", a * b * c);
                return;
            }
        }
    }
}
