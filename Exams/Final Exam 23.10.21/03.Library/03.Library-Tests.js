const library = require('./library');
const expect = require('chai').expect;

describe('library', () => {
    describe('calcPriceOfBook', () => [
        it('throws error when name is not a string', () => {
            expect((() => { library.calcPriceOfBook(2, 2002) })).to.throw('Invalid input');
        }),
        it('throws error when year is nan', () => {
            expect((() => { library.calcPriceOfBook('book', 'book') })).to.throw('Invalid input');
        }),
        it('returns smaller price if year equals 1980', () => {
            expect(library.calcPriceOfBook('a', 1980)).equals('Price of a is 10.00');
        }),
        it('returns smaller price if year smaller than 1980', () => {
            expect(library.calcPriceOfBook('a', 1979)).equals('Price of a is 10.00');
        }),
        it('returns normal price if year is bigger than 1980', () => {
            expect(library.calcPriceOfBook('a', 1981)).equals('Price of a is 20.00');
        })
    ]);
    describe('findBook', () => {
        it('throws error when no books available', () => {
            expect((() => { library.findBook(undefined, 'a') })).throws('No books currently available');
        }),
        it('book found', () => {
            expect(library.findBook(['a'], 'a')).equals('We found the book you want.');
        }),
        it('no book found', () => {
            expect(library.findBook(['a'], 'b')).equals('The book you are looking for is not here!');
        })
    });
    describe('arrangeTheBooks', () => {
        it('throws error when countBooks is NaN', () => {
            expect((() => { library.arrangeTheBooks('b') })).throws('Invalid input');
        }),
        it('throws error when countBooks is less than 0', () => {
            expect((() => { library.arrangeTheBooks(-2) })).throws('Invalid input');
        }),
        it('returns correct if countBooks is equal to availableSpace', () => {
            expect(library.arrangeTheBooks(40)).equals('Great job, the books are arranged.');
        }),
        it('returns correct if countBooks is less than availableSpace', () => {
            expect(library.arrangeTheBooks(39)).equals('Great job, the books are arranged.');
        }),
        it('returns insufficient space', () => {
            expect(library.arrangeTheBooks(41)).equals('Insufficient space, more shelves need to be purchased.');
        })
    });
})