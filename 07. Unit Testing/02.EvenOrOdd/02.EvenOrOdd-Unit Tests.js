const isOddOrEven = require('./02. Even or Odd');

let expect = require('chai').expect;

describe('02. Test Even or Odd function', function(){
    it('Test for undefined', function() {
        expect(isOddOrEven([1])).to.be.equal(undefined);
    });
    it('Test for even', function() {
        expect(isOddOrEven('abcd')).to.equal('even');
    });
    it('Test for odd', function() {
        expect(isOddOrEven('abv')).to.equal('odd');
    });
});