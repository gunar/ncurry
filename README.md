# ncurry

Curry for named arguments.

## Usage

Define function with positional arguments, call functions with named arguments.

```js
var ncurry = require('ncurry')

const foo = ncurry((a, b, c) => a + b + c)

foo({ a: 1 })({ b: 2, c: 3 }) // 6
```

### Accepts optional arguments (as deconstruction)

```js
var ncurry = require('ncurry')

const foo = ncurry((a, b, { c }) => a + b + c)

foo({ a: 1 })({ c: 3 }) // 4
foo({ a: 1 })({ b: 2, c: 3 }) // 6
```

### Partial application works too

```js
const ncurry = require('ncurry')
const { partial } = require('lodash/fp')

const foo = ncurry((a, b, c) => a + b + c)

const fooabc = partial(foo)([{ a: 1, b: 2, c: 3 }])
fooabc() // 7
```

## Inspiration

- [Gist and discussion](https://gist.github.com/gunar/1268c997ca66343f060dbca07aee67bd)
- [named-curry](https://github.com/rjmk/named-curry)

## License

MIT [http://gunar.mit-license.org]()
