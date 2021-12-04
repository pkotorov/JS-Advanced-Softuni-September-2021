class Parking {
    constructor(capacity) {
        this.capacity = +capacity;
        this.vehicles = [];
        this.parkedCars = 0;
    }

    addCar(carModel, carNumber) {
        if (this.parkedCars + 1 > this.capacity) {
            throw new Error('Not enough parking space.');
        }

        let car = {
            model: carModel,
            number: carNumber, 
            payed: false
        };

        this.vehicles.push(car);
        this.parkedCars++;

        return `The ${carModel}, with a registration number ${carNumber}, parked.`;
    }

    removeCar(carNumber) {
        let car = this.vehicles.find(cn => cn.number === carNumber);

        if (!car) {
            throw new Error("The car, you're looking for, is not found.");
        }

        if (!car.payed) {
            throw new Error(`${carNumber} needs to pay before leaving the parking lot.`);
        }

        this.vehicles = this.vehicles.filter(cn => cn.number !== carNumber);
        this.parkedCars--;

        return `${carNumber} left the parking lot.`;
    }

    pay(carNumber) {
        let car = this.vehicles.find(cn => cn.number === carNumber);

        if (!car) {
            throw new Error(`${carNumber} is not in the parking lot.`);
        }

        if (car.payed) {
            throw new Error(`${carNumber}'s driver has already payed his ticket.`);
        }

        car.payed = true;

        return `${carNumber}'s driver successfully payed for his stay.`;
    }

    getStatistics(carNumber) {

        if (!carNumber) {
            let result = [];
            result.push(`The Parking Lot has ${this.capacity - this.parkedCars} empty spots left.`)

            for (const car of this.vehicles) {
                result.push(`${car.model} == ${car.number} - ${car.payed === true ? 'Has payed' : 'Not payed'}`);
            }

            return result.join('\n');
        }

        let car = this.vehicles.find(cn => cn.number === carNumber);

        return `${car.model} == ${car.number} - ${car.payed === true ? 'Has payed' : 'Not payed'}`;
    }
}

const parking = new Parking(12);

console.log(parking.addCar("Volvo t600", "TX3691CA"));
console.log(parking.getStatistics());

console.log(parking.pay("TX3691CA"));
console.log(parking.removeCar("TX3691CA"));
