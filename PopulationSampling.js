const Calculator = require('./calculate');
const Lstats = require('./stats');

class Sampling extends Lstats {

    makeRand(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    Simple_Rand(values, size) {
        let rand = values.slice(0), i = values.length, min = i - size, temp, index;
        while (i-- > min) {
            index = Math.floor((i + 1) * Math.random());
            temp = rand[index];
            rand[index] = rand[i];
            rand[i] = temp;
        }
        return rand.slice(min);
    }
    System_Samp(values) {
        let i = this.makeRand(0, 9);
        let j;
        let interval = this.makeRand(4, (values.length / 3));
        let new_samp = [];
        for (j = 0; i < values.length; j++) {
            new_samp[j] = values[i];
            i += interval;
        }
        return new_samp;
    }
    /*
    Confidence Interval For a Sample
    Margin of Error
    How to Find a Confidence Interval
    Cochran’s Sample Size Formula
    How to Find a Sample Size Given a Confidence Interval and Width (unknown population standard deviation)
    How to Find a Sample Size Given a Confidence Interval and Width (known population standard deviation)
     */
}