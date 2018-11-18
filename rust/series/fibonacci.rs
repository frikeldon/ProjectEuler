pub struct Fibonacci {
	current: usize,
	next: usize,
}

impl Iterator for Fibonacci {
	type Item = usize;

	fn next(&mut self) -> Option<usize> {
		let new_next = self.current + self.next;

		self.current = self.next;
		self.next = new_next;

		Some(self.current)
	}
}

impl Fibonacci {
	pub fn new(prev: usize, first: usize) -> Fibonacci {
		Fibonacci {
			current: prev,
			next: first
		}
	}

	pub fn default() -> Fibonacci {
		Fibonacci::new(0, 1)
	}
}
