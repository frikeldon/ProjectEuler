mod series;

fn main() {
	let result: usize = series::Fibonacci::default()
		.take_while(|x| x <= &4000000)
		.filter(|x| x % 2 == 0)
		.sum();

    println!("{}", result);
}
