const Calculator = require('./calculate');
class Statistics extends Calculator {

    Variance(values) {
        //return this.Subtract(a,b);
        let avg = this.Mean(values),
            i = values.length,
            v = 0;

        while(i--){
            v += Math.pow( (values[i] - avg), 2 );
        }
        v /= values.length;
        return v;
    }
    Mean(values) {
        let sum = this.Add(values);
        let numValues = values.length;
        return this.Divide(sum,numValues);
    }
    Median(values) {
        let median = 0;
        let numValues = values.length;
        values.sort();

        if (
            numValues % 2 === 0 // even
        ) {
            median = (values[numValues / 2 - 1] + values[numValues / 2]) / 2;
        } else { // odd
            median = values[(numValues - 1) / 2];
        }
        return median;
    }
    Mode(values) {
        let modes = [];
        let count = [], i, num, maxI = 0;

        for (i = 0; i < values.length; i += 1) {
            num = values[i];
            count[num] = (count[num] || 0) + 1;
            if (count[num] > maxI) {
                maxI = count[num];
            }
        }

        for (i in count)
            if (count.hasOwnProperty(i)) {
                if (count[i] === maxI) {
                    modes.push(Number(i));
                }
            }

        return modes;
    }
    Stan_Dev(values) {
        return Math.sqrt(this.Variance(values));
    }
    Quartiles(values, quart) {
        values = this.Q_sort(values);
        let pos = ((values.length) - 1) * quart;
        let temp = Math.floor(pos);
        let rest = pos - temp;
        if((values[temp + 1] !== undefined)) {
            return values[temp] + rest * (values[temp+1] - values[temp]);
        }
        else {
            return values[temp];
        }
    }
    Q_sort(values){
        return values.sort(function(a, b) {
            return a - b;
        });
    }
    Skewness(values) {
        let mu = this.Mean(values);
        let sigma = this.Stan_Dev(values);
        let len = values.length;
        let skewSum = 0;

        for (let i = 0; i < len; i++)
            skewSum += Math.pow((values[i] - mu) / sigma, 3);

        return skewSum / len;
    }
    Covariance(vals1, vals2) {
        let u = this.Mean(vals1);
        let v = this.Mean(vals2);
        let vals1Len = vals1.length;
        let sq_dev = new Array(vals1Len);
        let i;

        for (i = 0; i < vals1Len; i++)
            sq_dev[i] = (vals1[i] - u) * (vals2[i] - v);

        return this.Add(sq_dev) / (vals1Len - 1);
    }
    Sample_Cor(vals1, vals2) {
        return this.Covariance(vals1, vals2) /
            this.Stan_Dev(vals1) /
            this.Stan_Dev(vals2);
    }
    Z_Score(raw_score, values) {
        return (raw_score - this.Mean(values)) / this.Stan_Dev(values);
        //(raw - mean)/ standard dev
    }
    Mean_Dev(values) {
        let mean = this.Mean(values);
        let array = [];
        for (let i = values.length - 1; i >= 0; i--) {
            array.push(Math.abs(values[i] - mean));
        }
        return this.Mean()(array);
    }

}
module.exports = Statistics;

//population correlation is no?