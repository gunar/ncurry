const test = require('tape')
const { partial } = require('lodash/fp')
const curry = require('./')

const foo = curry(
  ['a', 'b', 'c'],
  ({a, b, c}) => a + b + c)

test('original function', function (t) {
  const actual = foo({ a: 1, b: 2, c: 4})
  const expected = 7
  t.equal(actual, expected)
  t.end()
})

test('currying', function (t) {
  const actual = foo({ a: 1 })({ b: 2, c: 4})
  const expected = 7
  t.equal(actual, expected)
  t.end()
})

test('partial application (simple)', function (t) {
  const actual = foo({ a: 1 })({ b: 2 }, { c: 4 })
  const expected = 7
  t.equal(actual, expected)
  t.end()
})

test('partial application (lodash)', function (t) {
  const partiallyApplied = partial(foo)([{ a: 1 }])
  const actual = partiallyApplied({ b: 2 })({ c: 4 })
  const expected = 7
  t.equal(actual, expected)
  t.end()
})
