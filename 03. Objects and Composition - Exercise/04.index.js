function solve(input) {
    let result = [];

    for (const iterator of input) {
        let elements = iterator.split(' / ');
        let name = elements[0];
        let level = Number(elements[1]);
        let items = elements[2].split(', ');
        result.push({name, level, items})
    }

    return JSON.stringify(result);
}