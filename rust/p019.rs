fn is_leap(year: u32) -> bool {
    year % 4 == 0 && !(year % 100 == 0 && year % 400 != 0)
}

fn days_of_month(month: u32, leap: bool) -> u32 {
    match month {
        1 => 31,
        2 => if !leap { 28 } else { 29 },
        3 => 31,
        4 => 30,
        5 => 31,
        6 => 30,
        7 => 31,
        8 => 31,
        9 => 30,
        10 => 31,
        11 => 30,
        12 => 31,
        _ => 0,
    }
}

fn days_of_year(year: u32) -> u32 {
    if !is_leap(year) {
        365
    } else {
        366
    }
}

fn get_first_day_of_year(year: u32) -> u32 {
    ((1900..year).into_iter()
        .map(|y| days_of_year(y))
        .sum::<u32>() + 1) % 7
}

fn get_first_sundays_count(first_day_of_year: u32, leap: bool) -> u32 {
    let mut first_day = first_day_of_year;
    let mut count = 0;
    for m in 1..=12 {
        if first_day % 7 == 0 {
            count += 1;
        }
        first_day += days_of_month(m, leap);
    }
    count
}


fn main() {
    let result: u32 = (1901..=2000).into_iter()
        .map(|y| {
            let first_day = get_first_day_of_year(y);
            let leap = is_leap(y);
            get_first_sundays_count(first_day, leap)
        })
        .sum();

    println!("{}", result);
}
