const validator = require('./validator');

const nameExp = [
    ['', false],
    ['0123456789abcdef', false],
    ['dwadwaduh', true]
];

nameExp.forEach(function(t) {
    const res = validator.isNameValid(t[0]);
    test('expect isValidName(' + t[0] + ') to be ' + t[1], () => {
        expect(res).toBe(t[1]);
});
});

const egnExp = [
    ['qwertyuiop', false],
    ['012', false],
    ['15555555555555555', false],
    ['1010101010', true]
];

egnExp.forEach(function(t) {
    const res = validator.isEgnValid(t[0]);
    test('expect isValidEgn(' + t[0] + ') to be ' + t[1], () => {
        expect(res).toBe(t[1]);
});
});

const ageExp = [
    ['wd', false],
    ['15', false],
    ['120', false],
    ['20', true]
];

ageExp.forEach(function(t) {
    const res = validator.isAgeValid(t[0]);
    test('expect isValidAge(' + t[0] + ') to be ' + t[1], () => {
        expect(res).toBe(t[1]);
});
});

const addressExp = [
    ['', false],
    ['012345678901234567890123456789' +
    '012345678901234567890123456789' +
    '012345678901234567890123456789' +
    '01234567890123456789', false],
    ['Some street 30', true]
];

addressExp.forEach(function(t) {
    const res = validator.isAddressValid(t[0]);
    test('expect isAddressValid(' + t[0] + ') to be ' + t[1], () => {
        expect(res).toBe(t[1]);
});
});

const passExp = [
    ['6w54', false],
    ['01234567890123456789', false],
    ['фваддйв', false],
    ['password', true],
    ['12908271', true],
    ['1290dawd22daw1', true]
];

passExp.forEach(function(t) {
    const res = validator.isPasswordValid(t[0]);
    test('expect isPasswordValid(' + t[0] + ') to be ' + t[1], () => {
        expect(res).toBe(t[1]);
});
});