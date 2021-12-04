function solve(input) {
    if (input['dizziness'] === true) {
        let result = Number(input['weight']) * Number(input['experience']) * 0.1;
        input['levelOfHydrated'] += result;
        input['dizziness'] = false;
    }

    return input;
}

