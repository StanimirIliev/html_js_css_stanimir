export function isFraction(value) {
  if(value.length === undefined) {
    return false
  }
  let fraction = value
  if(fraction.indexOf(',') !== -1) {
    fraction = fraction.replace(',', '.')
  }
  const fractionParts = fraction.split('.')
  const onlyDigits = new RegExp('[0-9]')
  if(fractionParts.length === 1) {
    if(onlyDigits.test(fractionParts[0]) && fractionParts[0].length <= 10) {
      return true
    }
  }
  else if(fractionParts.length === 2) {
    if(onlyDigits.test(fractionParts[0]) &&
       fractionParts[0].length <= 10 &&
       onlyDigits.test(fractionParts[1]) &&
       fractionParts[1].length <= 5) {
      return true
    }
  }
  return false
}
