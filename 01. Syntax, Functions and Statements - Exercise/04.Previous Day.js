function solve(year, month, date) {
    let dat = new Date(year, month, date);
    dat.setDate(dat.getDate() - 1);

    console.log(dat.toISOString().substring(0, 10));
}

solve(2016, 9, 30);