class add {
    static sum(a = null, b = null) {
        let result = 0;
        if(Array.isArray(a)) {
            a.forEach(function (item) {
                result = add.sum(result, item);
            });
        }
        else {
            result = a + b;
        }
        return result;
    }
}

module.exports = add;