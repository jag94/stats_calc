const Sampled = require('../PopulationSampling');
const seed = require('../Seeds');
let sampler = new Sampled();

test('runs simple random sample with a seed', () => {
    let vals = seed.getSeedIntList('0', 1000, 1, 1000);
    let size = seed.getSeedInt('1', 1, 10); // 3
    let samp1 = sampler.Simple_Rand(vals, size);
    let samp2 = sampler.Simple_Rand(vals, size);
    expect(samp1).toEqual(expect.not.arrayContaining(samp2));
});

test('systematic sampling', () => {
    let vals = seed.getSeedIntList('3', 12, 1, 1000); // [552,   9, 201, 534, 698, 175, 815, 484, 930, 103, 577, 305]
    let size = seed.getSeedInt('2', 1, 3); // 3
    let samp = sampler.System_Samp(vals, size);
    expect(samp).toEqual([ 534, 484, 305 ]);
});

test('finds a confidence interval for a given sample size', () =>  {
    let samp = seed.getSeedIntList('5', 10, 1, 36); // [22, 20,  4,  5, 20, 9,  4, 35, 29, 24]
    let con = sampler.Sample_Confidence(samp, 0.05);
    expect(con).toEqual([10.330488556786728, 24.069511443213273]);
});

test('finds margin of error', () => {
    let size = seed.getSeedInt('6', 1, 10); // 7
    let mar = sampler.Margin_Error(0.95, 14.58, size);
    expect(mar).toBe(5.235185915650805);
});

test('finds a confidence interval', () => {
    let rand = seed.getSeedInt('7', 20, 25); // 21
    let size = seed.getSeedInt('8', 1, 10); // 7
    let con = sampler.Confidence_Int(size, 1.28, 18.12, rand);
    expect(con).toEqual([12.233643198813187, 29.766356801186813]);
});

test('finds the cochran formula' , () => {
    let vals = seed.getSeedInt('09', 50000, 100000); // 90563
    let size = seed.getSeedInt('10', 1, 50000); // 45357
    let cochran = sampler.Coch_Samp_Size(1.28, 5, vals, size);
    expect(cochran).toBe(163.83954451693674);
});

test('gives a confidence interval with standard deviation unknown', () => {
    let rand = seed.getSeedInt('11', 15, 25); // 17
    let size = seed.getSeedInt('12', 1, 20); // 5
    let con = sampler.CInt_Unknown(rand, 18.12, size, 1.96);
    expect(con).toEqual([ 1.1171197130998944, 32.882880286900104 ]);
});

test('gives a confidence interval with population standard deviation known', () => {
    let rand = seed.getSeedInt('11', 15, 25); // 17
    let size = seed.getSeedInt('12', 1, 20); // 5
    let con = sampler.CInt_Known(rand, 18.12, size, 1.96);
    expect(con).toEqual([ 1.1171197130998944, 32.882880286900104 ]);
});