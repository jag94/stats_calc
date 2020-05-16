const seeded = require('../Seeds');

test('get a seeded int list', () => {
    let list = seeded.getSeedIntList('0', 5, 1, 5);
    expect(list).toEqual([3, 2, 2, 5, 5]);
});