
exports.floatToFixed = function(value, checks, precise) {

    if(checks) {

        if(isNaN(value))
            _e('Not a number: %d', value);
        if(value < 0)
            _e('Value cannot be negative: %d', value);
        if(value > 90071992.54740992)
            _e('Value is too large: %d', value);

        if(precise) {
            var rem = value - Math.floor(value);
            if(rem !== 0 && rem < 1e-8)
                _e('Value would lose precision: %d', value);
        }
    }

    return Math.round(1e8 * value);
}

exports.fixedToFloat = function(value) {
    return value / 1e8;
}
