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

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let gen = seeded.selectSeedItems('7', 4, arr);

//console.log(size);
//console.log(rand2);
console.log(gen);
//console.log(stats.Abs_Dev(arr1)); // [3, 2, 2, 5, 5]);
//console.log("The score is: " + zscore);
