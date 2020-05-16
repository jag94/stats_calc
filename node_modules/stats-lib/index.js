//Single Array Statistics:

function validArr(arr){
    if ((arr == null) || !(arr instanceof Array)|| (arr.length === 0)) return false;
    return true;
}
function validNumber(arr){
    arr.forEach(function(el){if (isNaN(el)) return false;});
    return true;
}

function mean(arr) {
    if (!validArr(arr)) return null;
    if (!validNumber(arr)) return NaN;
    var s = 0;
    arr.forEach(function(el){
        s += el;
    });
    return s/arr.length;
}

function nSmallest(arr, n){
    if (n < 0) return null;
    if (!validArr(arr)) return null;
    if (!validNumber(arr)) return NaN;  
    if (n === 0) return [];
    var X = arr.slice();
    X.sort(function(a, b){
        return a-b;
    });
    var res = [];
    X.forEach(function(x, ind){
        if (ind < n) res.push(x);
    });
    return res;
}

function nLargest(arr, n){
    if (n < 0) return null;
    if (!validArr(arr)) return null;
    if (!validNumber(arr)) return NaN;  
    if (n === 0) return [];
    var X = arr.slice();
    X.sort(function(a, b){
        return a-b;
    });
    var res = [];
    var startInd = Math.max(X.length - n,0);
    while (startInd < X.length){
        res.push(X[startInd]);
        startInd += 1;
    }
    return res;
}

function median(arr) {
    if (!validArr(arr)) return null;
    if (!validNumber(arr)) return NaN;
    var X = arr.slice();
    X.sort(function(a, b){
        return a-b;
    });
    half = Math.floor(X.length/2);
    if (X.length % 2 === 0) {
        return (X[half-1]+X[half])/2;
    } else {
        return X[half];
    }
}

function mode(arr) {
    if (!validArr(arr)) return null;
    if (!validNumber(arr)) return NaN;
    var counts = {};
    var maxCount = 0;
    arr.forEach(function(el){
        if (counts[el] === undefined){
            counts[el] = 1;
        } else {
            counts[el] += 1;
        }
        maxCount = Math.max(counts[el], maxCount);
    });
    var res = [];
    for (var key in counts){
        if (counts[key] === maxCount) res.push(parseInt(key));
    }
    if (res.length === 1) return res[0];
    return res; 
}

function sd(arr) {
    if (!validArr(arr)) return null;
    if (!validNumber(arr)) return NaN;
    if (arr.length === 1) return undefined;
    var m = mean(arr);
    var s = 0;
    arr.forEach(function(x){
        s += (x-m)*(x-m);
    });
    return Math.sqrt(s/(arr.length-1));
}

function variance(arr){
    var sdX = sd(arr);
    if ((sdX === null) || (sdX === NaN)|| (sdX === undefined)) return sdX;
    return sdX*sdX;
}

function se(arr){
    var sdX = sd(arr);
    if ((sdX === null) || (sdX === NaN)|| (sdX === undefined)) return sdX;
    return sdX/Math.sqrt(arr.length);
}

function max(arr) {
    if (!validArr(arr)) return null;
    if (!validNumber(arr)) return NaN;
    var max = arr[0];
    arr.forEach(function(x){
        max = (x>max? x: max);
    });
    return max;
}

function min(arr) {
    if (!validArr(arr)) return null;
    if (!validNumber(arr)) return NaN;
    var min = arr[0];
    arr.forEach(function(x){
        min = (x<min? x: min);
    });
    return min;   
}

function sum(arr) {
    if ((arr == null) || !(arr instanceof Array)) return null;
    if (arr.length === 0) return 0; //empty => sum = 0
    if (!validNumber(arr)) return NaN;
    var s = 0;
    arr.forEach(function(x){
        s += x;
    });
    return s;   
}

function range(arr){
    if (!validArr(arr)) return null;
    if (!validNumber(arr)) return NaN;
    var high = arr[0];
    var low = arr[0];
    arr.forEach(function(x){
        high = Math.max(x, high);
        low = Math.min(x, low);
    });
    return high - low;
}

function quartile(arr){
    if (!validArr(arr)) return null;
    if (!validNumber(arr)) return NaN;
    var n = arr.length;
    if (n % 2 === 0){
        return [median(nSmallest(arr, n/2)), median(arr), median(nLargest(arr, n/2))];
    } else {
        return [median(nSmallest(arr, (n+1)/2)), median(arr), median(nLargest(arr, (n+1)/2))];
    }
}

function zScore(arr){
    var sdX = sd(arr);
    if ((sdX === null) || (sdX === NaN)|| (sdX === undefined)) return sdX;
    var m = mean(arr);
    var res = [];
    arr.forEach(function(x){
        res.push((x-m)/sdX);
    });
    return res;
}

function kthMoment(X, k){
    if (isNaN(k)) return null;
    var meanX = mean(X);
    if (k==1) return 0;
    var s = 0;
    var t = 0;
    X.forEach(function(el){
        s += (el-meanX)**k;
        t += (el-meanX)**2;
    });
    if (t===0) return undefined;
    return (s/X.length)/(Math.sqrt(t/X.length)**k);

}

//Multiple Array Statistics:
function cov(X, Y){
    if (!validArr(X)) return null;
    if (!validNumber(X)) return NaN;    
    if (!validArr(Y)) return null;
    if (!validNumber(Y)) return NaN;   
    if (X.length !== Y.length) return null;
    if (X.length === 1 || Y.length === 1) return undefined;
    var s = 0;
    var meanX = mean(X);
    var meanY = mean(Y);
    for (var i=0; i<X.length; i++){
        s += (X[i]-meanX)*(Y[i]-meanY);
    }
    return s/(X.length-1);
}

function corr(X,Y){
    var sdX = sd(X);
    var sdY = sd(Y)
    if ((sdX === null) || (sdX === NaN)|| (sdX === undefined)) return sdX;
    if ((sdY === null) || (sdY === NaN)|| (sdY === undefined)) return sdY;
    if (X.length !== Y.length) return null;
    if (sdX === 0 || sdY === 0) return undefined;
    return cov(X,Y)/sdX/sdY;
}

function fit(X,Y){
    if (!validArr(X)) return null;
    if (!validNumber(X)) return NaN;    
    if (!validArr(Y)) return null;
    if (!validNumber(Y)) return NaN;   
    if (X.length !== Y.length) return null;
    if (X.length === 1 || Y.length === 1) return undefined;
    var r = 0;
    var s = 0;
    var t = 0;
    var meanX = mean(X);
    var meanY = mean(Y);
    for (var i=0; i<X.length; i++){
        r += (X[i]-meanX)*(Y[i]-meanY);
        s += (X[i]-meanX)**2;
        t += (Y[i]-meanY)**2;
    }
    if (s===0) return undefined;
    var m = r/s;
    return [m, meanY-meanX*m, r/Math.sqrt(s)/Math.sqrt(t)];
}

module.exports = {
    //single array ops
    mean: mean,
    median: median,
    mode: mode,
    sd: sd,
    se: se,
    variance: variance,
    max: max,
    min: min,
    sum: sum,
    nLargest: nLargest,
    nSmallest: nSmallest,
    range: range,
    quartile: quartile,
    zScore: zScore,
    kthMoment: kthMoment,
    //multiple arrays ops
    cov: cov,
    corr: corr,
    fit: fit,
};