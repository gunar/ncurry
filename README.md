# ncurry

[![ci](https://circleci.com/gh/gunar/ncurry.png?circle-token=158755b2084a927f33b1642a7667870adcba2fb9)](https://circleci.com/gh/gunar/ncurry)

Curry with named arguments (as opposed to positional).

## Usage

Define with positional, call as named.

```js
const ncurry = require('ncurry')

// define your function using positional arguments
const multiply = ncurry((a, b) => a * b)

// then call it using named arguments
multiply({ a: 2, b: 3 }) // 6

// as expected, you may pass one argument at a time
multiply({ a: 2 })({ b: 3 }) // 6

// and in any order
multiply({ b: 3 })({ a: 2 }) // 6
```

### Optional arguments

Use destructuring for arguments that are optional.

```js
const ncurry = require('ncurry')

// to make `round` optional, put it inside destructuring
const divide = ncurry((dividend, divisor, { round = false }) =>
  round
    ? Math.round(dividend / divisor)
    : dividend / divisor
)

// call it without `round` to use default value of `false`, as specified above
divide({ dividend: 9 })({ divisor: 2 }) // 4.5

// explicitly specify `round`, if you wish
divide({ dividend: 9, round: true })({ divisor: 2 }) // 5
```

### Partial application

Bring your own partial applicator.
You may pick from the market any tool (that behaves well).

```js
const ncurry = require('ncurry')
const { partial } = require('lodash/fp')

const sum = ncurry((a, b, c) => a + b + c)

const sumAbc = partial(sum)([{ a: 1, b: 2, c: 3 }])
sumAbc() // 6
```

## Explanation (How does this black magic work?)

It's called meta-programming.

If you pass a function called `foo`, we invoke `foo.toString()` and parse the
resulting string to acquire the list of arguments.

Actually, instead of writing this code ourselves, we use a well tested and
estabilished package called [`parse-function`](https://www.npmjs.com/package/parse-function).

## Inspiration

- [Gist and discussion](https://gist.github.com/gunar/1268c997ca66343f060dbca07aee67bd)
- [named-curry](https://github.com/rjmk/named-curry)

## License

MIT [http://gunar.mit-license.org]()
