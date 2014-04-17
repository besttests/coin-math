
var coinMath = require('../index.js');

exports.test = function() {
    var fee = 0.02;

    var x = [
        0,
        0.1,
        1,
        0.00000001,
        // 0.000000001,
        // 0.000000005,
        0.12345,
        123,
        123456,
        123456.7890123,
        0.7890123,
        0.00355131,
        289.99999999
        // 1234567890.0987654321
    ];

    x.forEach(function(v) {
        var fixed = coinMath.floatToFixed(v, true, true);
        var float = coinMath.fixedToFloat(fixed);
        console.log(v + ' =fixed=> ' + fixed + ' =float=> ' + float);
    });
};

exports.test();
