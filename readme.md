
## coin-math

Simple functions to convert between the Floating-point and the "Satoshi" integer values (monetary amounts).

### Usage

```js

var coinMath = require('coin-math');

var amount = 1.23456789;

var satoshi = coinMath.floatToFixed(amount, true, true);

var amount2 = coinMath.fixedToFloat(satoshi);

console.log('amount(%d) satoshi(%d) amount2(%d)', amount, satoshi, amount2);

```

(Please examine the code to learn more about the function parameters.)

### License

MIT
