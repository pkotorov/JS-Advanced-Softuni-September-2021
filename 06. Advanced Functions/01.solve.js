function solve(array, order) {
    let result = order === 'asc' 
        ? array.map(x => Number(x))
        .sort((a, b) => a - b)
        : array.map(x => Number(x))
        .sort((a, b) => b - a);

    return result;
}
