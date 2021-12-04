function solve(a, b) {
    let result = a % b;

    while (result != 0) {
        a = b;
        b = result;
        result = a % b;
    }

    console.log(b);
}
