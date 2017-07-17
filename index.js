'use strict'

function curryNamed (keys, fn) {
  return function helper (o) {
    return function (o2) {
      const obj = Object.assign({}, o, o2)
      return includes(keys, Object.keys(obj)) ? fn(obj) : helper(obj)
    }
  }
}

const includes = (mandatory, received) =>
  mandatory.every(key =>
    received.includes(key))

module.exports = curryNamed
