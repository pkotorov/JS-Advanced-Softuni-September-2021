class Movie {
    constructor(movieName, moviePrice) {
        this.movieName = movieName;
        this.moviePrice = moviePrice;
        this.screenings = [];
        this.totalProfit = 0;
        this.totalTickets = 0;
    }

    newScreening(date, hall, description) {
        const obj = {
            date: date,
            hall: hall,
            description: description,
        };

        const screen = this.screenings.find(o => o.date === date && o.hall === hall);

        if (screen === undefined) {
            this.screenings.push(obj);
            return `New screening of ${this.movieName} is added.`;
        } else {
            throw new Error(`Sorry, ${hall} hall is not available on ${date}`);
        }
    }

    endScreening(date, hall, soldTickets) {
        const screen = this.screenings.find(o => o.date === date && o.hall === hall);

        if (screen === undefined) {
            throw new Error(`Sorry, there is no such screening for ${this.movieName} movie.`);
        }

        this.totalTickets += Number(soldTickets);
        let currentProfit = Number(soldTickets) * Number(this.moviePrice);
        this.totalProfit += currentProfit;

        let idx = 0;
      for (let i = 0; i < this.screenings.length; i++) {
        if (
          this.screenings[i].date === date &&
          this.screenings[i].hall === hall
        ) {
          idx = i;
          break;
        }
      }
      this.screenings.splice(idx, 1);
      return `${this.movieName} movie screening on ${date} in ${hall} hall has ended. Screening profit: ${currentProfit}`;
    }

    toString() {
        let result = [
          `${this.movieName} full information:`,
          `Total profit: ${this.totalProfit.toFixed(0)}$`,
          `Sold Tickets: ${this.ticketsCount}`,
        ];
        if (this.screenings.length > 0) {
          result.push(`Remaining film screenings:`);
          let sorted = this.screenings.sort((a, b) => a.hall.localeCompare(b.hall));
          for (const s of sorted) {
            result.push(`${s.hall} - ${s.date} - ${s.desc}`);
          }
        } else {
          result.push(`No more screenings!`);
        }
        return result.join("\n");
      }
    }

let m = new Movie('Wonder Woman 1984', '10.00');
console.log(m.newScreening('October 2, 2020', 'IMAX 3D', `3D`));
console.log(m.newScreening('October 3, 2020', 'Main', `regular`));
console.log(m.newScreening('October 4, 2020', 'IMAX 3D', `3D`));
console.log(m.endScreening('October 2, 2020', 'IMAX 3D', 150));
console.log(m.endScreening('October 3, 2020', 'Main', 78));
console.log(m.toString());

m.newScreening('October 4, 2020', '235', `regular`);
m.newScreening('October 5, 2020', 'Main', `regular`);
m.newScreening('October 3, 2020', '235', `regular`);
m.newScreening('October 4, 2020', 'Main', `regular`);
console.log(m.toString());

