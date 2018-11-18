use std::cmp::Ordering;
use std::fmt;

#[derive(Eq)]
pub struct BigInt {
    digits: Vec<i8>
}

pub fn new() -> BigInt {
    BigInt { digits: vec![0] }
}

#[allow(dead_code)]
pub fn from_string(text: &str) -> BigInt {
    match text.is_empty() {
        true => new(),
        false => {
            let digits = text.chars()
                .rev()
                .map(|c| c as i8 - '0' as i8)
                .collect();
            BigInt {digits }
        },
    }
}

#[allow(dead_code)]
pub fn from_u32(number: u32) -> BigInt {
    from_string(&number.to_string())
}

#[allow(dead_code)]
pub fn add(first: &BigInt, second: &BigInt) -> BigInt {
    let mut new_digits: Vec<i8> = first.digits.iter()
        .zip(second.digits.iter())
        .map(|(&mine, &their)| mine + their)
        .collect();

    if first.digits.len() != second.digits.len() {
        let remain = if first.digits.len() > new_digits.len() {
            first.digits.iter()
        } else {
            second.digits.iter()
        };

        for &chunk in remain.skip(new_digits.len()) {
            new_digits.push(chunk);
        }
    }

    let mut remainder: i8 = 0;

    for i in 0..new_digits.len() {
        let new_value = new_digits[i] + remainder;
        new_digits[i] = new_value % 10;
        remainder = new_value / 10;
    }

    if remainder > 0 {
        new_digits.push(remainder);
    }

    BigInt {
        digits: new_digits,
    }
}

#[allow(dead_code)]
pub fn mul(first: &BigInt, second: &BigInt) -> BigInt {
    let mut digits: Vec<i8> = vec![0; first.digits.len() + second.digits.len() - 1];

    let mut carry = 0;

    for s in 0..second.digits.len() {
        carry = 0;

        for f in 0..first.digits.len() {
            let digit = digits[s+f] + (second.digits[s] * first.digits[f]) + carry;
            digits[s+f] = digit % 10;
            carry = digit / 10;
        }

        if carry > 0 {
            let pos = s+first.digits.len();

            if pos >= digits.len() {
                
                digits.push(carry % 10);
                carry /= 10;
            } else {
                let digit = digits[pos] + carry;
                digits[pos] = digit % 10;
                carry = digit / 10;
            }
        }
    }

    if carry > 0 {
        digits.push(carry);
    }

    BigInt {
        digits,
    }
}

#[allow(dead_code)]
pub fn pow(base: &BigInt, exponent: i32) -> BigInt {
    let mut product = from_string("1");
    let mut current_base = base.clone();
    let mut current_exponent = exponent;

    while current_exponent > 0 {
        if current_exponent % 2 == 1 {
            product = mul(&product, &current_base);
        }

        current_base = mul(&current_base, &current_base);
        current_exponent = current_exponent / 2;
    }

    return product;
}

impl Ord for BigInt {
    fn cmp(&self, other: &BigInt) -> Ordering {
        let my_length = self.digits.len();
        let their_length = other.digits.len();

        if my_length > their_length {
            return Ordering::Greater;
        }

        if my_length < their_length {
            return Ordering::Less;
        }

        for (&mine, &their) in self.digits.iter().rev().zip(other.digits.iter().rev()) {
            if mine > their {
                return Ordering::Greater;
            }
            if mine < their {
                return Ordering::Less;
            }
        }
       
        Ordering::Equal
    }
}

impl PartialOrd for BigInt {
    fn partial_cmp(&self, other: &BigInt) -> Option<Ordering> {
        Some(self.cmp(other))
    }
}

impl PartialEq for BigInt {
    fn eq(&self, other: &BigInt) -> bool {
        self.digits.len() == other.digits.len()
        && self.digits.iter()
            .zip(other.digits.iter())
            .all(|(&mine, &their)| { mine == their })
    }
}

impl Clone for BigInt {
    fn clone(&self) -> BigInt {
        BigInt {
            digits: self.digits.clone()
        }
    }
}

impl fmt::Display for BigInt {
    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
        let text = self.digits.iter()
            .rev()
            .map(|d| d.to_string())
            .collect::<Vec<String>>()
            .join("");

        write!(f, "{}", text)
    }
}

impl fmt::Debug for BigInt {
    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
        write!(f, "{:?}", self.digits)
    }
}
