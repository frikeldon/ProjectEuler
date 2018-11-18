fn main() {
    let mut sum_square: i64 = 0;
    let mut square_sum: i64 = 0;

    for n in 1..=100 {
        sum_square += n;
        square_sum += n * n;
    }
    sum_square *= sum_square;

    println!("{}", sum_square - square_sum);
}
