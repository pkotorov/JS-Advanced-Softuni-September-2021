function solve(input) {
    let num = 1;
    let array = [];

    for (const command of input) {
        if (command === 'add') {
            array.push(num);
            num++;
        } else {
            array.pop();
            num++;
        }
    }

    array.length != 0 ? console.log(array.join('\n')) : console.log('Empty');
}

solve(['remove', 
'remove', 
'remove']
);