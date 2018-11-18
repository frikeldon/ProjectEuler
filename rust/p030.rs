fn main() {
    let pows: Vec<usize> = (0..10usize).into_iter()
        .map(|n| n.pow(5))
        .collect();

    let mut result = 0;

    for i in 2..1000000 {
        let mut current = i;
        let mut sum = 0;

        while current > 0 {
            sum += pows[current % 10];
            current /= 10;
        }

        if i == sum {
            result += i;
        }
    }

    println!("{}", result);
}