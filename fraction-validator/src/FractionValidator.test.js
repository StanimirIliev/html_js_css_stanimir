var fractionValidator = require('./FractionValidator.js')

const exp = [
  ['abc', false],
  ['5.2', true],
  ['5,2', true],
  ['5', true],
  ['5123456789001651.2', false],
  ['5.2123445155', false]
];

test('', () => {
  exp.forEach(function(element) {
    expect(fractionValidator.isFraction(element[0])).toBe(element[1])
  })
})
