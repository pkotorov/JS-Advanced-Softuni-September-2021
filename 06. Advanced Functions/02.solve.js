function solve(...input) {
    const types = {};

    for (const entry of input) {
        let type = typeof entry;
        console.log(`${type}: ${entry}`)
        types[type] = (types[type] + 1) || 1 ;
    }

    for (const key in types) {
        console.log(`${key} = ${types[key]}`);
    }
}

solve({ name: 'bob'}, 3.333, 9.999)