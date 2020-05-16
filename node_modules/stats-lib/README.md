<img src="https://wyqian1027.github.io/public/public/img/favicon-96x96.png" >

# stats-lib

Statistical JavaScript library of frequently used operations on arrays.

```javascript
npm install stats-lib
```
# How to use

```javascript
var stats = require('stats-lib');

var X = [4, 4, 3, 2, 1, 0];

console.log(stats.sum(X));      //14
console.log(stats.mean(X));     //2.3333333333333335 
console.log(stats.median(X));   //2.5 
console.log(stats.mode(X));     //4, return array if more than one mode
console.log(stats.sd(X));       //1.632993161855452, standard deviation
console.log(stats.se(X));       //0.6666666666666667, standard error
console.log(stats.variance(X)); //2.6666666666666665, variance
console.log(stats.max(X));      //4
console.log(stats.min(X));      //0
console.log(stats.range(X));    //4
console.log(stats.nLargest(X, 3));  //[ 3, 4, 4 ]
console.log(stats.nSmallest(X, 2)); //[ 0, 1 ]
console.log(stats.quartile(X));     //[ 1, 2.5, 4 ]
console.log(stats.zScore(X));       //Z-Score, output below
// [ 1.0206207261596574,
//   1.0206207261596574,
//   0.4082482904638629,
//   -0.2041241452319316,
//   -0.8164965809277261,
//   -1.4288690166235207 ]
console.log(stats.kthMoment(X, 1));  //0, standardized moment degree 1
console.log(stats.kthMoment(X, 2));  //1, standardized moment degree 2
console.log(stats.kthMoment(X, 3));  //-0.279508497187474
//standardized moment of degree 3 or skewness

var Y = [10, 9, 8, 7 , 6, 4];

console.log(stats.cov(X, Y));    //3.4666666666666672, covariance
console.log(stats.corr(X, Y));   //0.9827076298239911, correlation
console.log(stats.fit(X, Y));    //linear fit y = m x + b
//[ 1.3, 4.299999999999999, 0.9827076298239907 ] 
//[   m,                 b,  correlation coeff ]
```

# Simple Error Handling
Invalid input => return null  
Invalid number => return NaN  
Divide by 0 => undefined  


# License

The MIT License