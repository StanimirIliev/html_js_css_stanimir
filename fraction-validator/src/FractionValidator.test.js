var fractionValidator = require('./FractionValidator.js')

const exp = [
  [5.2, false],
  ['abc', false],
  ['5.2', true],
  ['5,2', true],
  ['5', true],
  ['51234567890.2', false],
  ['5.212345', false],
];

exp.forEach(function(element) {
  test('Expect isFraction(' + element[0] + ') toBe ' + element[1], () => {
      expect(fractionValidator.isFraction(element[0])).toBe(element[1]);
  });
})
