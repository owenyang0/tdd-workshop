const assert = require('assert')
const fizzBuzz = require('../index').fizzBuzz

describe('my test cases', () => {
  it('it should be true', () => {
    assert.equal(1 === 1, true, '1 === 1 should be true')
  })
})

describe('FizzBuzz', () => {
  it('should return an array with length euqals 100', () => {
    assert.equal(fizzBuzz().length, 100, 'length should be 100')
  })

  it('should return 7 for 7th number', () => {
    assert.equal(fizzBuzz()[6], 7)
  })

  it('should return fizz for 3rd or 33th number', () => {
    assert.equal(fizzBuzz()[2], 'Fizz')
    assert.equal(fizzBuzz()[32], 'Fizz')
  })

  it('should return Buzz for 5th or 25th number', () => {
    assert.equal(fizzBuzz()[4], 'Buzz')
    assert.equal(fizzBuzz()[24], 'Buzz')
  })
})
