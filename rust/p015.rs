fn main() {
    const SIZE: usize = 21;

    let mut points = [[0usize; SIZE]; SIZE];

    for i in 0..SIZE {
        points[0][i] = 1;
        points[i][0] = 1;
    }

    for i in 1..SIZE {
        for j in i..SIZE {
            points[i][j] = points[i - 1][j] + points[i][j - 1];
            points[j][i] = points[j - 1][i] + points[j][i - 1];
        }
    }

    println!("{}", points[SIZE-1][SIZE-1]);
}
