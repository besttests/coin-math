
exports.floatToFixed = function(value, checks, precise) {

    if(checks) {

        if(isNaN(value))
            throw new Exception('Not a number: %d', value);
        if(value < 0)
            throw new Exception('Value cannot be negative: %d', value);
        if(value > 90071992.54740992)
            throw new Exception('Value is too large: %d', value);

        if(precise) {
            var rem = value - Math.floor(value);
            if(rem !== 0 && rem < 1e-8)
                throw new Exception('Value would lose precision: %d', value);
        }
    }

    return Math.round(1e8 * value);
}

exports.fixedToFloat = function(value) {
    return value / 1e8;
}
