function solve(input, num) {
    for (let index = 0; index < num; index++) {
        input.unshift(input.pop(input[input.length - 1]));
    }

    console.log(input.join(' '));
}

