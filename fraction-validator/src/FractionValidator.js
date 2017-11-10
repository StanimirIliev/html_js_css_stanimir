export function isFraction(value) {
  return new RegExp(/^\d{1,10}((\.|,)\d{1,5})?$/).test(value)
}
