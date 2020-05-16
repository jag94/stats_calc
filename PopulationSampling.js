const Calculator = require('./calculate');
const Lstats = require('./DescStats');
const { jStat } = require('jstat');

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
    System_Samp(values, size) {
        let n = Math.floor(this.Divide(values.length, size));
        let pos = n;
        let new_samp = [];
        for(let i = 0; i < size; i++) {
            new_samp[i] = values[n - 1];
            n += pos;
        }
        return new_samp;
    }

    Sample_Confidence(values, alpha) {
        let lstats = new Lstats();
        return jStat.normalci(lstats.Mean(values), alpha, lstats.Stan_Dev(values), values.length);
    }

    Confidence_Int(size, z_score, stDev, hold) {
        let arr = [];
        arr[0] = this.Subtract(hold, this.Margin_Error(z_score, stDev, size));
        arr[1] = this.Add(hold, this.Margin_Error(z_score, stDev, size));
        return arr;
    }

    percentile_z(p) {
        let a0= 2.5066282,  a1=-18.6150006,  a2= 41.3911977,   a3=-25.4410605,
            b1=-8.4735109,  b2= 23.0833674,  b3=-21.0622410,   b4=  3.1308291,
            c0=-2.7871893,  c1= -2.2979648,  c2=  4.8501413,   c3=  2.3212128,
            d1= 3.5438892,  d2=  1.6370678, r, z;

        if (p>0.42) {
            r=Math.sqrt(-Math.log(0.5-p));
            z=(((c3*r+c2)*r+c1)*r+c0)/((d2*r+d1)*r+1);
        } else {
            r=p*p;
            z=p*(((a3*r+a2)*r+a1)*r+a0)/((((b4*r+b3)*r+b2)*r+b1)*r+1);
        }
        return z;
    }
    poz(z) {

        let y, x, w;

        if (z == 0.0) {
            x = 0.0;
        } else {
            y = 0.5 * Math.abs(z);
            if (y > (6 * 0.5)) {
                x = 1.0;
            } else if (y < 1.0) {
                w = y * y;
                x = ((((((((0.000124818987 * w
                    - 0.001075204047) * w + 0.005198775019) * w
                    - 0.019198292004) * w + 0.059054035642) * w
                    - 0.151968751364) * w + 0.319152932694) * w
                    - 0.531923007300) * w + 0.797884560593) * y * 2.0;
            } else {
                y -= 2.0;
                x = (((((((((((((-0.000045255659 * y
                    + 0.000152529290) * y - 0.000019538132) * y
                    - 0.000676904986) * y + 0.001390604284) * y
                    - 0.000794620820) * y - 0.002034254874) * y
                    + 0.006549791214) * y - 0.010557625006) * y
                    + 0.011630447319) * y - 0.009279453341) * y
                    + 0.005353579108) * y - 0.002141268741) * y
                    + 0.000535310849) * y + 0.999936657524;
            }
        }
        return z > 0.0 ? ((x + 1.0) * 0.5) : ((1.0 - x) * 0.5);
    }
    critz(p) {
        let Z_EPSILON = 0.000001;     /* Accuracy of z approximation */
        let minz = -6;
        let maxz = 6;
        let zval = 0.0;
        let pval;
        if( p < 0.0 ) p = 0.0;
        if( p > 1.0 ) p = 1.0;

        while ((maxz - minz) > Z_EPSILON) {
            pval = this.poz(zval);
            if (pval > p) {
                maxz = zval;
            } else {
                minz = zval;
            }
            zval = ((maxz + minz) * 0.5);
        }
        zval = parseFloat(zval.toPrecision(3));
        return(zval);
    }

    Margin_Error(z_score, stDev, size) {
        return this.Divide(this.Multiply(z_score, stDev), this.Root(size));
    }

    Coch_Samp_Size(z_score, margin, population, size) {
        let p = this.Divide(size, population);
        let q = this.Subtract(1, p);
        let pq = this.Multiply(p, q);
        let e = this.Divide(margin, 100);
        return this.Divide(this.Multiply(this.Square(z_score), pq), this.Square(e));
    }
    CInt_Unknown(val, stDev, size, t_val) {
        let arr = [];
        arr[0] = this.Subtract(val, this.Margin_Error(t_val, stDev, size));
        arr[1] = this.Add(val, this.Margin_Error(t_val, stDev, size));
        return arr;
    }
    CInt_Known(val, stDev, size, z_val) {
        let arr = [];
        arr[0] = this.Subtract(val, this.Margin_Error(z_val, stDev, size));
        arr[1] = this.Add(val, this.Margin_Error(z_val, stDev, size));
        return arr;
    }


    Confidence_Size(con_int) {
        let hold = con_int / 2.0;

    }

    Confidence_Size_Known(con_int, stan_dev) {

    }


    /*
    Confidence Interval For a Sample
    How to Find a Confidence Interval
    Cochran’s Sample Size Formula
    How to Find a Sample Size Given a Confidence Interval and Width (unknown population standard deviation)
    How to Find a Sample Size Given a Confidence Interval and Width (known population standard deviation)
     */
}

module.exports = Sampling;