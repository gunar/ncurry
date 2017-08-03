const test = require('tape')
const { partial } = require('lodash/fp')
const ncurry = require('./')

const foo = ncurry((a, b, c) => a + b + c)

test('original function', t => {
  const actual = foo({ a: 1, b: 2, c: 4})
  const expected = 7
  t.equal(actual, expected)
  t.end()
})

test('currying', t => {
  const actual = foo({ a: 1 })({ b: 2, c: 4})
  const expected = 7
  t.equal(actual, expected)
  t.end()
})

test('partial application (simple)', t => {
  const actual = foo({ a: 1 })({ b: 2 }, { c: 4 })
  const expected = 7
  t.equal(actual, expected)
  t.end()
})

test('partial application (lodash)', t => {
  const partiallyApplied = partial(foo)([{ a: 1 }])
  const actual = partiallyApplied({ b: 2 })({ c: 4 })
  const expected = 7
  t.equal(actual, expected)
  t.end()
})

test('argument overriding', t => {
  try {
    foo({ a: 1 })({ a: 1, b: 2, c: 4})
  } catch (e) {
    return t.end()
  }
})

test('optional arguments', t => {
  const bar = ncurry((a, b, opts, c) => a + b + c + opts.z)
  const actual = bar({ a: 1, z: 10 })({ b: 2, c: 4})
  const expected = 17
  t.equal(actual, expected)
  t.end()
})

test('opts arg conflict', t => {
  const bar = ncurry((a, b, opts, c) => a + b + c + opts.opts)
  const actual = bar({ a: 1, opts: 10 })({ b: 2, c: 4})
  const expected = 17
  t.equal(actual, expected)
  t.end()
})
