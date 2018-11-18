use std::cmp;
use std::cmp::Ordering;
use std::fmt;

const DIGITS: usize = 3;
const MASK: isize = 1000;

#[derive(Eq)]
pub struct BigInt {
    positive: bool,
    chunks: Vec<isize>,
}

pub fn new() -> BigInt {
    BigInt {
        positive: true,
        chunks: vec![0],
    }
}

pub fn from_string(text: &str) -> BigInt {
    if text.is_empty() {
        return new();
    }

    let first_char = text.chars().next().unwrap();
    let positive = first_char != '-';

    let mut current = if first_char == '-' || first_char == '+' {
        let (_, number) = text.split_at(1);
        number
    } else {
        text
    };

    let mut chunks: Vec<isize> = Vec::new();

    while !current.is_empty() {
        if current.len() <= DIGITS {
            chunks.push(current.to_string().parse::<isize>().unwrap());
            break;
        } else {
            let (reminder, part) = current.split_at(cmp::max(0, current.len() - DIGITS));
            chunks.push(part.to_string().parse::<isize>().unwrap());
            current = reminder;
        }
    }

    BigInt { positive, chunks }
}

pub fn add(first: &BigInt, second: &BigInt) -> BigInt {
    if first.positive == second.positive {
        let mut new_chunks: Vec<isize> = first.chunks.iter()
            .zip(second.chunks.iter())
            .map(|(&mine, &their)| mine + their)
            .collect();

        if first.chunks.len() != second.chunks.len() {
            let remain = if first.chunks.len() > new_chunks.len() {
                first.chunks.iter()
            } else {
                second.chunks.iter()
            };

            for &chunk in remain.skip(new_chunks.len()) {
                new_chunks.push(chunk);
            }
        }

        let mut remainder: isize = 0;

        for i in 0..new_chunks.len() {
            let new_value = new_chunks[i] + remainder;
            new_chunks[i] = new_value % MASK;
            remainder = new_value / MASK;
        }

        if remainder > 0 {
            new_chunks.push(remainder);
        }

        BigInt {
            positive: first.positive,
            chunks: new_chunks,
        }
    } else {
        panic!("not implemented yet");
    }
}

impl BigInt {
    
}

impl Ord for BigInt {
    fn cmp(&self, other: &BigInt) -> Ordering {
        if self.positive && !other.positive {
            return Ordering::Greater;
        }

        if !self.positive && other.positive {
            return Ordering::Less;
        }

        let my_length = self.chunks.len();
        let their_length = other.chunks.len();

        let comparison: Ordering = {
            if my_length > their_length {
                return Ordering::Greater;
            }

            if my_length < their_length {
                return Ordering::Less;
            }

            for (&mine, &their) in self.chunks.iter().rev().zip(other.chunks.iter().rev()) {
                if mine > their {
                    return Ordering::Greater;
                }
                if mine < their {
                    return Ordering::Less;
                }
            }
            Ordering::Equal
        };

        if self.positive {
            comparison
        } else {
            match comparison {
                Ordering::Less => Ordering::Greater,
                Ordering::Equal => Ordering::Equal,
                Ordering::Greater => Ordering::Less,
            }
        }
    }
}

impl PartialOrd for BigInt {
    fn partial_cmp(&self, other: &BigInt) -> Option<Ordering> {
        Some(self.cmp(other))
    }
}

impl PartialEq for BigInt {
    fn eq(&self, other: &BigInt) -> bool {
        self.positive == other.positive
        && self.chunks.len() == other.chunks.len()
        && self.chunks.iter()
            .zip(other.chunks.iter())
            .all(|(&mine, &their)| { mine == their })
    }
}

impl fmt::Display for BigInt {
    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
        let sign = match self.positive {
            true => "",
            false => "-",
        };
        let text = self.chunks.iter()
            .rev()
            .map(|x| format!("{:0>3}", x))
            .collect::<Vec<String>>()
            .join("");
        let trimed_text = text.trim_start_matches('0');

        write!(f, "{}{}", sign, trimed_text)
    }
}

impl fmt::Debug for BigInt {
    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
        write!(f, "{}{:?}", self.positive, self.chunks)
    }
}
