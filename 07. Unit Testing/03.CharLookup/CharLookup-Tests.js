const charLookup = require('./CharLookup');
const expect = require('chai').expect;

describe('Fn works properly', function() {
    it('To return undefined', function() {
        expect(charLookup('abc', 'a')).to.be.equal(undefined);
    });
    it('To return incorrect index', function() {
        expect(charLookup('abc', -2)).to.be.equal('Incorrect index');
    });
    it('To return correct value', function() {
        expect(charLookup('abc', 2)).to.be.equal('c');
    });
})