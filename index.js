const Sampling = require('./PopulationSampling');
const Statistics = require('./DescStats');
const seeded = require('./Seeds');
let stats = new Statistics();
a = 0.95;
b = 2;

let sampler = new Sampling();
zscore = sampler.critz(a);

let seed = new seeded();
let arr1 = seeded.getSeedIntList('989', 12, 1, 12);
let arr2 = seeded.getSeedIntList('3', 1, 100);
let int3 = seeded.getSeedInt('3', 1, 100);

let rand = seeded.getSeedInt('11', 15, 25); // 46
let size = seeded.getSeedInt('12', 1, 20); // 16
let con = sampler.CInt_Known(rand, 18.12, size, 1.96);

console.log(size);
console.log(con);
console.log(rand);
//console.log(stats.Abs_Dev(arr1)); // [3, 2, 2, 5, 5]);
//console.log("The score is: " + zscore);
