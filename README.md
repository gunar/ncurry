# ncurry

[![ci](https://circleci.com/gh/gunar/ncurry.png?circle-token=158755b2084a927f33b1642a7667870adcba2fb9)](https://circleci.com/gh/gunar/ncurry)

Curry with named arguments (as opposed to positional).

## Usage

Define with positional, call as named.

```js
const ncurry = require('ncurry')

const multiply = ncurry((a, b) => a * b)

// pass one argument at a time
multiply({ a: 2 })({ b: 3 }) // 6

// or all at once
multiply({ a: 2, b: 3 }) // 6
```

### Optional arguments

Use destructuring for arguments that are optional.

```js
const ncurry = require('ncurry')

const divide = ncurry((dividend, divisor, { round = false }) =>
  round
    ? Math.round(dividend / divisor)
    : dividend / divisor
)

divide({ dividend: 9 })({ divisor: 2 }) // 4.5

divide({ dividend: 9, round: true })({ divisor: 2 }) // 5
```

### Partial application works too

```js
const ncurry = require('ncurry')
const { partial } = require('lodash/fp')

const sum = ncurry((a, b, c) => a + b + c)

const sumAbc = partial(sum)([{ a: 1, b: 2, c: 3 }])
sumAbc() // 6
```

## Inspiration

- [Gist and discussion](https://gist.github.com/gunar/1268c997ca66343f060dbca07aee67bd)
- [named-curry](https://github.com/rjmk/named-curry)

## License

MIT [http://gunar.mit-license.org]()
