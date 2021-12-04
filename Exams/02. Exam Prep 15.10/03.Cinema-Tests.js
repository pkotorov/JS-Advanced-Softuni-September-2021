const expect = require('chai').expect;
const cinema = require('./cinema');

describe('cinema', () => {
    describe('showMovies', () => {
        it('returns no movies', () => {
            expect(cinema.showMovies('')).to.be.equal('There are currently no movies to show.');
        })
        it('returns correct', () => {
            expect(cinema.showMovies(['Ivan', 'Gosho'])).to.be.equal('Ivan, Gosho');
        })
    })
    describe('ticketPrice', () => {
        it('returns price correct', () => {
            expect(cinema.ticketPrice('Premiere')).to.be.equal(12.00);
        })
        it('throws error when project type is invalid', () => {
            expect(function () {
                cinema.ticketPrice('3DX')
            }).to.throw('Invalid projection type.');
        })
    })
    describe('swapSeatsInHall', () => {
        it('returns unsuccessfull when firstPlace is NaN', () => {
            expect(cinema.swapSeatsInHall('ss', 2)).to.be.equal('Unsuccessful change of seats in the hall.');
        })
        it('returns unsuccessfull when secondPlace is NaN', () => {
            expect(cinema.swapSeatsInHall(2, 'ss')).to.be.equal('Unsuccessful change of seats in the hall.');
        })
        it('returns unsuccessfull when secondPlace and firstPlace are equal', () => {
            expect(cinema.swapSeatsInHall(2, 2)).to.be.equal('Unsuccessful change of seats in the hall.');
        })
        it('returns unsuccessfull when firstPlace is less than 0', () => {
            expect(cinema.swapSeatsInHall(-2, 2)).to.be.equal('Unsuccessful change of seats in the hall.');
        })
        it('returns unsuccessfull when firstPlace is more than 20', () => {
            expect(cinema.swapSeatsInHall(21, 2)).to.be.equal('Unsuccessful change of seats in the hall.');
        })
        it('returns unsuccessfull when secondPlace is less than 0', () => {
            expect(cinema.swapSeatsInHall(2, -2)).to.be.equal('Unsuccessful change of seats in the hall.');
        })
        it('returns unsuccessfull when secondPlace is more than 20', () => {
            expect(cinema.swapSeatsInHall(2, 21)).to.be.equal('Unsuccessful change of seats in the hall.');
        })
        it('returns unsuccessfull when firstPlace is 0', () => {
            expect(cinema.swapSeatsInHall(0, 2)).to.be.equal('Unsuccessful change of seats in the hall.');
        })
        it('returns unsuccessfull when secondPlace is 0', () => {
            expect(cinema.swapSeatsInHall(2, 0)).to.be.equal('Unsuccessful change of seats in the hall.');
        })
        it('returns unsuccessfull when secondPlace is different type than firstPlace', () => {
            expect(cinema.swapSeatsInHall(2, '2')).to.be.equal('Unsuccessful change of seats in the hall.');
        })
        it('returns sucessfull', () => {
            expect(cinema.swapSeatsInHall(2, 6)).to.equal('Successful change of seats in the hall.')
        })
        it('returns sucessfull when firstNumber is 20', () => {
            expect(cinema.swapSeatsInHall(20, 6)).to.equal('Successful change of seats in the hall.')
        })
        it('returns sucessfull when secondNumber is 20', () => {
            expect(cinema.swapSeatsInHall(2, 20)).to.equal('Successful change of seats in the hall.')
        })
    })
})