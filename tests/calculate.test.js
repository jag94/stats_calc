const Calculate = require('../calculate');

test('Calculate divide 4 by  2 to equal 2', () => {
    let Ctest = new Calculate();
    expect(Ctest.Divide(4, 2)).toBe(2);
});

test('Calculate add 2 and  2 to equal 4', () => {
    let Ctest = new Calculate();
    expect(Ctest.Add(2, 2)).toBe(4);
});

test('Calculate subtract 6 and  2 to equal 4', () => {
    let Ctest = new Calculate();
    expect(Ctest.Subtract(6, 2)).toBe(4);
});

test('Calculate multiply 2 by  2 to equal 4', () => {
    let Ctest = new Calculate();
    expect(Ctest.Multiply(2, 2)).toBe(4);
});

test('Calculate square 2 to equal 4', () => {
    let Ctest = new Calculate();
    expect(Ctest.Square(2)).toBe(4);
});

test('Calculate root 4 to equal 2', () => {
    let Ctest = new Calculate();
    expect(Ctest.Root(4)).toBe(2);
});