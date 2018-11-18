use std::fmt;

pub struct Factor {
	pub base: usize,
	pub exponent: usize,
}

impl Factor {
    #[allow(dead_code)]
	pub fn factorize(primes: &[usize], number: usize) -> Vec<Factor> {
        let mut factors: Vec<Factor> = Vec::new();
        let mut reminder = number;
        let mut counter = 0;

        while reminder > 1 {
            let base = primes[counter];
            counter += 1;

            if reminder % base == 0 {
                let mut exponent = 0;
                while reminder % base == 0 {
                    exponent += 1;
                    reminder /= base;
                }

                factors.push(Factor { base, exponent });
            }
        }

        factors
    }

    #[allow(dead_code)]
    pub fn get_num_factors(factors: &[Factor]) -> usize {
        factors.iter()
            .fold(1, |acc, x| acc * (x.exponent + 1))
    }

    #[allow(dead_code)]
    pub fn proper_divisors(factors: &[Factor]) -> Vec<usize> {
        if factors.len() == 0 {
            return Vec::new();
        }

        let first_factor = &factors[0];

        if factors.len() == 1 {
            return (0..=first_factor.exponent).into_iter()
                .map(|f| first_factor.base.pow(f as u32))
                .collect::<Vec<usize>>();
        }

        let divisors_subset = Factor::proper_divisors(&factors[1..]);

        let mut divisors = (0..=first_factor.exponent as u32).into_iter()
            .map(|e| first_factor.base.pow(e))
            .flat_map(|p| divisors_subset.iter()
                .map(|d| p * d)
                .collect::<Vec<usize>>())
            .collect::<Vec<usize>>();
        divisors.sort();
        divisors.dedup();
        divisors
    }
}

impl fmt::Debug for Factor {
    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
        write!(f, "({} ^ {})", self.base, self.exponent)
    }
}