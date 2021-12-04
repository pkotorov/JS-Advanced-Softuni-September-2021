function solve(input) {
    let result = {};
    let engine = {};
    let carrObj = {};
    let wheels = [];
    let model = input.model;
    let power = Number(input.power);
    let color = input.color;
    let carriage = input.carriage;
    let wheelSize = Number(input.wheelsize);

    result['model'] = model;
    if (power < 120) {
        engine['power'] = 90;
        engine['volume'] = 1800; 
    } else if (power >= 120 && power < 200) {
        engine['power'] = 120;
        engine['volume'] = 2400;
    } else {
        engine['power'] = 200;
        engine['volume'] = 3500;
    }

    result['engine'] = engine;
    carrObj['type'] = carriage;
    carrObj['color'] = color;
    result['carriage'] = carrObj;

    if (wheelSize % 2 == 0) {
        wheelSize -= 1;
    }


    for (let index = 0; index < 4; index++) {
        wheels.push(wheelSize);
    }

    result['wheels'] = wheels;

    return result;
}