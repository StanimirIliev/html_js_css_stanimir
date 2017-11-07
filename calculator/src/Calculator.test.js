import React from 'react';
import CreateCalculator from './Calculator';

const calculator = CreateCalculator;


test("5+2=7", () => {
    calculator.onNumber(5);
    calculator.onOperation('+');
    calculator.onNumber(2);
    calculator.onEvaluate();
    expect(calculator.display).toBe("7")
});

test("5-2=3", () => {
    calculator.onNumber(5);
    calculator.onOperation('-');
    calculator.onNumber(2);
    calculator.onEvaluate();
    expect(calculator.display).toBe("3")
});

test("5*2=10", () => {
    calculator.onNumber(5);
    calculator.onOperation('*');
    calculator.onNumber(2);
    calculator.onEvaluate();
    expect(calculator.display).toBe("10")
});

test("5/2=2", () => {
    calculator.onNumber(5);
    calculator.onOperation('/');
    calculator.onNumber(2);
    calculator.onEvaluate();
    expect(calculator.display).toBe("2")
});

test("5+2*3=11", () => {
    calculator.onNumber(5);
    calculator.onOperation('+');
    calculator.onNumber(2);
    calculator.onOperation('*');
    calculator.onNumber(3);
    calculator.onEvaluate();
    expect(calculator.display).toBe("11")
});

test("5+2/2=6", () => {
    calculator.onNumber(5);
    calculator.onOperation('+');
    calculator.onNumber(2);
    calculator.onOperation('/');
    calculator.onNumber(2);
    calculator.onEvaluate();
    expect(calculator.display).toBe("6")
});

test("5+2--2=9", () => {
    calculator.onNumber(5);
    calculator.onOperation('+');
    calculator.onNumber(2);
    calculator.onOperation('-');
    calculator.onOperation('-');
    calculator.onNumber(2);
    calculator.onEvaluate();
    expect(calculator.display).toBe("9")
});

test("5/0=Error", () => {
    calculator.onNumber(5);
    calculator.onOperation('/');
    calculator.onNumber(0);
    calculator.onEvaluate();
    expect(calculator.display).toBe("Error")
});

test("5+=Error", () => {
    calculator.onNumber(5);
    calculator.onOperation('+');
    calculator.onEvaluate();
    expect(calculator.display).toBe("Error")
});