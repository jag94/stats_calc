const Statistics = require('../DescStats');
const seed = require('../Seeds');
let stats = new Statistics();

test('find the mean of a data set', () => {
    let array = seed.getSeedIntList('0', 6, 1, 6); // [ 3, 2, 3, 5, 6, 2 ]
    let mean = stats.Mean(array);
    expect(mean).toBe(3.5);
});
test('find median of even set', () => {
    let array = seed.getSeedIntList('0', 6, 1, 6); // [ 3, 2, 3, 5, 6, 2 ]
    let median = stats.Median(array);
    expect(median).toBe(3);
});
test('find median of odd set', () => {
    let array = seed.getSeedIntList('0', 11, 0, 11); // [4,  2, 4, 9, 11, 2, 11, 7, 5,  7, 3]
    let median = stats.Median(array);

    expect(median).toBe(5);
});
test('find the mode of a data set', () => {
    let array = seed.getSeedIntList('989', 12, 1, 12); // [6, 7, 2, 6, 2, 2, 8, 5, 6, 4, 3, 5]
    let mode = stats.Mode(array);
    expect(mode).toStrictEqual([2, 6]);
});
test('find the variance of a data set', () => {
    let array = seed.getSeedIntList('989', 12, 1, 12); // [6, 7, 2, 6, 2, 2, 8, 5, 6, 4, 3, 5]
    let variance = stats.Variance(array);
    expect(variance).toBe(4.242424242424243);
});
test('find the standard deviation of a data set', () => {
    let array = seed.getSeedIntList('989', 12, 1, 12); // [6, 7, 2, 6, 2, 2, 8, 5, 6, 4, 3, 5]
    let std_Dev = stats.Stan_Dev(array);
    expect(std_Dev).toBe(2.059714602177749);
});

test('calculate the quartiles of a data set', () => {
    let array = seed.getSeedIntList('989', 12, 1, 12); // [6, 7, 2, 6, 2, 2, 8, 5, 6, 4, 3, 5]
    let quartiles = stats.Quartiles(array);
    expect(quartiles).toStrictEqual([ 2.5, 5, 6 ]);
});
test('find the skewness of a data set', () => {
    let array = seed.getSeedIntList('989', 12, 1, 12); // [6, 7, 2, 6, 2, 2, 8, 5, 6, 4, 3, 5]
    let skew = stats.Skewness(array);
    expect(skew).toBe(-0.05312398172579295);
});
test('calculate the sample correlation of a data set', () => {
    let arr1 = seed.getSeedIntList('1', 11, 0, 11); // [10, 3, 3, 5, 9, 1, 5, 9, 4, 6, 4]
    let arr2 = seed.getSeedIntList('2', 11, 0, 11); // [2, 4, 4, 2,  0, 11, 5, 9, 2, 10, 4]
    let samp_corr = stats.Sample_Corr(arr1,arr2);
    expect(samp_corr).toBe(-0.2808204083312716);
});
test('calculate the population correlation of a data set', () => {
    let arr1 = seed.getSeedIntList('1', 11, 0, 11); // [10, 3, 3, 5, 9, 1, 5, 9, 4, 6, 4]
    let arr2 = seed.getSeedIntList('2', 11, 0, 11); // [2, 4, 4, 2,  0, 11, 5, 9, 2, 10, 4]
    let pop_corr = stats.Population_Corr(arr1,arr2);
    expect(pop_corr).toBe(-0.2808204083312716);
});
test('find z-score of a data set', () => {
    let arr = seed.getSeedIntList('4', 10, 1, 100); // [42, 21, 46,  38, 25, 23, 43, 90, 100, 29]
    let grab = seed.getSeedInt('3', 1, 100); // 85
    let score = stats.Z_Score(grab, arr);
    expect(score).toBe(1.4272206275944817);
});
test('calculate absolute mean deviation of a data set', () => {
    let array = seed.getSeedIntList('989', 12, 1, 12); // [6, 7, 2, 6, 2, 2, 8, 5, 6, 4, 3, 5]
    let mean_dev = stats.Abs_Dev(array);
    expect(mean_dev).toBe(1.722222222222222);
});