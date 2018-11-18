mod factor;
pub use self::factor::Factor;

#[allow(dead_code)]
pub fn is_palindrome(number: usize) -> bool {
    let text = number.to_string();
    let reverse = text.chars().rev().collect::<String>();
    text == reverse
}

#[allow(dead_code)]
pub fn number_to_text(number: usize) -> String {
    if number < 14 {
        return String::from(match number {
            0 => "",
            1 => "one",
            2 => "two",
            3 => "three",
            4 => "four",
            5 => "five",
            6 => "six",
            7 => "seven",
            8 => "eight",
            9 => "nine",
            10 => "ten",
            11 => "eleven",
            12 => "twelve",
            13 => "thirteen",
            _ => "",
        });
    }

    if number < 20 {
        return match number {
            15 => String::from("fifteen"),
            18 => String::from("eighteen"),
            _ => number_to_text(number % 10) + "teen",
        };
    }

    if number < 100 {
        let tens = match number / 10 {
            2 => "twenty",
            3 => "thirty",
            4 => "forty",
            5 => "fifty",
            6 => "sixty",
            7 => "seventy",
            8 => "eighty",
            9 => "ninety",
            _ => "",
        };
        let units = number_to_text(number % 10);

        if units.is_empty() {
            return String::from(tens);
        } else {
            return format!("{}-{}", tens, units);
        }
    }

    if number < 1000 {
        let hundreds = number_to_text(number / 100) + " hundred";
        let tens = number_to_text(number % 100);

        if tens.is_empty() {
            return String::from(hundreds);
        } else {
            return format!("{} and {}", hundreds, tens);
        }
    }

    if number == 1000 {
        return String::from("one thousand");
    }

    panic!("not implemented yet!");
}
