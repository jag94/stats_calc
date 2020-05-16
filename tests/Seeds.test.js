const seed = require('../Seeds');

test('generate a random int', () => {
    for(let i = 0; i < 100; i++) {
        let rand = seed.getRandomInt(1, 5);
        expect(rand).toBeGreaterThanOrEqual(1) && expect(rand).toBeLessThanOrEqual(5);
    }
});

test('generate a random float', () => {
    for(let i = 0; i < 100; i++) {
        let rand = seed.getRandomFloat(1, 2);
        expect(rand).toBeGreaterThanOrEqual(1) && expect(rand).toBeLessThanOrEqual(2);
    }
});

test('generate a seed int', () => {
    let rand = seed.getSeedInt('0', 1, 10);
    expect(rand).toBe(8);
});

test('generate a seed float', () => {
    let rand = seed.getSeedFloat('1', 1, 10);
    expect(rand).toBe(3.4250396300121935);
});

test('generate a seed integer array', () => {
    let arr = seed.getSeedIntList('2', 5, 1, 10);
    expect(arr).toEqual([ 3, 4, 4, 3, 1 ]);
});

test('generate a seed float array', () => {
    let arr = seed.getSeedFloatList('3', 4, 1, 10);
    expect(arr).toEqual([5.964071513491787, 1.0738672090368997, 2.8066458603840236, 5.798177985362495]);
});

test('generate a random item from an array', () => {
    let arr = [1, 2, 3, 4, 5];
    let num = seed.getRandomItem(arr);
    for(let i = 0; i < 10; i++) {
        expect(num).toBeGreaterThanOrEqual(1) && expect(num).toBeLessThanOrEqual(3);
    }
});

test('generate a seed from an array', () => {
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let num = seed.getSeedItem('6', arr);
    expect(num).toBe(7);
});

test('generate a random array from an array', () => {
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let gen = seed.selectRandomItems(4, arr);
    expect(gen).toHaveLength(4) && expect(arr).toContain(gen[0])
    && expect(arr).toContain(gen[1]) && expect(arr).toContain(gen[2]);
});

test('generate a seeded array from an array', () => {
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let gen = seed.selectSeedItems('7', 4, arr);
    expect(gen).toEqual([8, 2, 5, 1]);
});