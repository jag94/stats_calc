const sum = require('../sum.js');

test('adds 2 + 2 to equal 4', () => {
    expect(sum.sum(2, 2)).toBe(4);
});

test('adds 2 + 2 + 2 to equal 6', () => {
    expect(sum.sum([2, 2, 2])).toBe(6);
});