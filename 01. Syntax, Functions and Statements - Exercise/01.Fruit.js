function solve(fruit, grams, price) {
    let kilos = Number(grams) / 1000;
    let amount = kilos * price;
    
    console.log(`I need $${amount.toFixed(2)} to buy ${kilos.toFixed(2)} kilograms ${fruit}.`);
}
