const pizzaUni = require('./03.Pizza Place');
const expect = require('chai').expect;

describe('pizzaUni', () => {
    describe('makeAnOrder', () => {
        it('throws an error when no pizza is ordered', () => {
            expect(() => (pizzaUni.makeAnOrder({orderedDrink: 'Cola'}))).to.throw('You must order at least 1 Pizza to finish the order.');
        });
    })
})