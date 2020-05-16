const seedrandom = require('seedrandom');
class Seeds {
    static getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    static getRandomFloat(min, max) {
        return Math.random() * (max - min) + min;
    }

    static getSeedInt(seed, min, max) {
        let rng = seedrandom(seed);
        return Math.floor(rng() * (max - min + 1) + min);
    }

    static getSeedFloat(seed, min, max) {
        let rng = seedrandom(seed);
        return rng() * (max - min) + min;
    }

    static getSeedIntList(seed, size, min, max) {
        let arr = [];
        let rng = seedrandom(seed);
        for (let i = 0; i < size; i++) {
            arr[i] = this.getSeedInt(rng(), min, max);
        }
        return arr;
    }

    static getSeedFloatList(seed, size, min, max) {
        let arr = [];
        let rng = seedrandom(seed);
        for (let i = 0; i < size; i++) {
            arr[i] = this.getSeedFloat(rng(), min, max);
        }
        return arr;
    }

    static getRandomItem(arr) {
        let pos = this.getRandomInt(0, arr.length - 1);
        return arr[pos];
    }

    static getSeedItem(seed, arr) {
        let pos = this.getSeedInt(seed, 0, arr.length - 1);
        return arr[pos];
    }

    static selectRandomItems(n, arr) {
        let temp = [];
        for (let i = 0; i < n; i++) {
            let rand = this.getRandomInt(0, arr.length - 1);
            temp[i] = arr[rand];
            arr.splice(rand, 1);
        }
        return temp;
    }

    static selectSeedItems(seed, n, arr) {
        let temp = [];
        let rng = seedrandom(seed);
        for (let i = 0; i < n; i++) {
            let rand = this.getSeedInt(rng(), 0, arr.length - 1);
            temp[i] = arr[rand];
            arr.splice(rand, 1);
        }
        return temp;
    }
}
module.exports = Seeds;