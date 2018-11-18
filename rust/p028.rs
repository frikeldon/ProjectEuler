fn main() {
    let mut result = 1;
    let mut current = 1;
    let mut size = 2;
    for _i in 0..500 {
        for _sides in 0..4 {
            current += size;
            result += current;
        }
        size += 2;
    }
    println!("{}", result)
}
