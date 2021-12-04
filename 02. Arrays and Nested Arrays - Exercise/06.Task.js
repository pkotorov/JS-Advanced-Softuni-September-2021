function solve(array) {
    let num = 0;
    array = array
        .sort((a, b) => a.localeCompare(b))
        .map(x => `${++num}.` + x)
        .join('\n');

    console.log(array);
}

solve(["John", "Bob", "Christina", "Ema"])

