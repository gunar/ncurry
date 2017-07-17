const test = require('tape')
const curry = require('./')

test('basic test', function (t) {

  const foo = curry(
    ['a', 'b', 'c'],
    ({a, b, c}) => a + b + c)

  // const actual = curry(foo, keys)({ a: 1 })({ a: 1, b: 2, c: 3}) TODO fail
  const actual = foo({ a: 1 })({ b: 2, c: 3})
  const expected = 6

  t.equal(actual, expected)
  t.end()
})
