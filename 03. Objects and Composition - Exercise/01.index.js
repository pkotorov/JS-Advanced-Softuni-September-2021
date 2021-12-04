function solve(input) {
    let result = {};

    for (let index = 1; index < input.length; index += 2) {
        const element = input[index];
        result[input[index - 1]] = Number(element);
    }

    console.log(result);
}

solve(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);