const subtract = require('../subtract.js');

test('subtracts 2 - 2 to equal 0', () => {
    expect(subtract(2, 2)).toBe(0);
});