const Calculator = require('./calculate');
const impstats = require('stats-lib');
const { jStat } = require('jstat');


class Statistics extends Calculator {

    Mean(values) {
        let sum = this.Add(values);
        let numValues = values.length;
        return this.Divide(sum, numValues);
    }
    Median(values) {
        return impstats.median(values);
    }
    Mode(values) {
        return impstats.mode(values);
    }
    Variance(values) {
        return impstats.variance(values);
    }
    Stan_Dev(values) {
        return Math.sqrt(this.Variance(values));
    }
    Quartiles(values, quart) {
        return impstats.quartile(values);
    }
    Skewness(values) {
        return impstats.kthMoment(values, 3);
    }
    Covariance(vals1, vals2) {
        return impstats.cov(vals1, vals2);
    }
    Sample_Corr(vals1, vals2) {
        return impstats.corr(vals1, vals2);
    }
    Population_Corr(values1, values2){
        return jStat.corrcoeff(values1, values2);
    }

    Z_Score(raw_score, values) {
        let zscore = (raw_score - this.Mean(values)) / this.Stan_Dev(values);
        return zscore;
    }
    Abs_Dev(values) {
        let mean = this.Mean(values);
        let array = [];
        for (let i = values.length - 1; i >= 0; i--) {
            array.push(Math.abs(values[i] - mean));
        }
        return this.Mean(array);
    }

}
module.exports = Statistics;