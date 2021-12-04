const { expect } = require('chai');
const { numberChecker } = require('./testNumbers');
const testNumbers = require('./testNumbers');

describe('testNumbers', () => {
    describe('sumNumbers', () => {
        it('returns undefined if num1 not a number', () => {
            expect(testNumbers.sumNumbers('1', 2)).to.be.undefined;
        })
        it('returns undefined if num2 not a number', () => {
            expect(testNumbers.sumNumbers(1, '2')).to.be.undefined;
        })
        it('returns value', () => {
            expect(testNumbers.sumNumbers(1, 2)).to.be.equal('3.00');
        })
    })
    describe('numberChecker', () => {
        it('throws an error if not a number', () => {
            expect(function() {
                testNumbers.numberChecker('s');
            }).to.throw('The input is not a number!')
        })
        it('returns even when num is even', () => {
            expect(testNumbers.numberChecker(2)).to.be.equal('The number is even!');
        })
        it('returns odd if num is odd', () => {
            expect(testNumbers.numberChecker(3)).to.be.equal('The number is odd!');
        })
    })
    describe('averageSumArray', () => {
        it('returns value', () => {
            expect(testNumbers.averageSumArray([3, 4, 5, 4])).to.be.equal(4);
        })
    })
})