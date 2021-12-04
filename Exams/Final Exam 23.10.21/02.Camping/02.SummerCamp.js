class SummerCamp {
    constructor(organizer, location) {
        this.organizer = organizer;
        this.location = location;
        this.priceForTheCamp = {
            child: 150,
            student: 300,
            collegian: 500
        };
        this.listOfParticipants = [];
    };

    registerParticipant(name, condition, money) {
        if (!this.priceForTheCamp.hasOwnProperty(condition)) {
            throw new Error('Unsuccessful registration at the camp.');
        }

        let currentParticipant = this.listOfParticipants.find(n => n.name === name);

        if (currentParticipant) {
            return `The ${name} is already registered at the camp.`;
        }

        if (+money < this.priceForTheCamp[condition]) {
            return `The money is not enough to pay the stay at the camp.`;
        }

        let newParticipant = {
            name: name,
            condition: condition,
            power: 100,
            wins: 0
        };

        this.listOfParticipants.push(newParticipant);

        return `The ${name} was successfully registered.`;
    }

    unregisterParticipant(name) {
        let currentParticipant = this.listOfParticipants.find(n => n.name === name);

        if (!currentParticipant) {
            throw new Error(`The ${name} is not registered in the camp.`);
        }

        this.listOfParticipants = this.listOfParticipants.filter(n => n.name !== name);

        return `The ${name} removed successfully.`;
    }

    timeToPlay(typeOfGame, participant1, participant2) {
        let player1 = this.listOfParticipants.find(n => n.name === participant1);
        let player2 = this.listOfParticipants.find(n => n.name === participant2);

        if (!player1) {
            throw new Error('Invalid entered name/s.');
        }
       
        if (typeOfGame === 'Battleship') {
            player1.power += 20;
            return `The ${participant1} successfully completed the game ${typeOfGame}.`;
        } else if (typeOfGame === 'WaterBalloonFights') {
            if (!player2) {
                throw new Error('Invalid entered name/s.');
            }

            if (player1.condition !== player2.condition) {
                throw new Error('Choose players with equal condition.');
            }

            let betterPlayer;

            if(player1.power > player2.power) {
                betterPlayer = player1;
            } else if (player1.power < player2.power) {
                betterPlayer = player2;
            } else {
                return 'There is no winner.';
            }

            betterPlayer.wins++;

            return `The ${betterPlayer.name} is winner in the game ${typeOfGame}.`;
        } 
    }

    toString() {
        let result = [];

        result.push(`${this.organizer} will take ${this.listOfParticipants.length} participants on camping to ${this.location}`);

        for (const player of this.listOfParticipants.sort((a, b) => b.wins - a.wins)) {
            result.push(`${player.name} - ${player.condition} - ${player.power} - ${player.wins}`);
        }

        return result.join('\n');
    }
}

const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));

console.log(summerCamp.toString());



