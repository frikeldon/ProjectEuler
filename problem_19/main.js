var result = 0;
var year, month, date;

for (year = 1901; year <= 2000; year++) {
    for (month = 0; month < 12; month++) {
        date = new Date(year, month, 1);
        if (date.getDay() === 0) {
            result++;
        }
    }
}

console.log(result);