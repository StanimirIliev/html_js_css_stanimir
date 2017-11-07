import React from 'react';
import shuntingYard from 'shunting-yard';


let createCalculator = () => {

    let calculator = {
        display: '0',
        history: 'History',
        lastSymbol: null,
        restrictMinus: false,
        result: null
    };

    let sy = shuntingYard;

    calculator.onNumber = (number) => {
        if((calculator.display === '0' && number !== 0) || calculator.result !== null || calculator.display === 'Error') {
            calculator.result = null;
            calculator.display = number.toString();
        }
        else if (calculator.display !== '0' && calculator.display !== 'Error') {
            calculator.display += number.toString();
        }
        calculator.lastSymbol = 'number';
        calculator.restrictMinus = false;
    };

    calculator.onOperation = (operation) => {
        if(calculator.lastSymbol === 'operation' && operation === '-' && !calculator.restrictMinus) {
            calculator.restrictMinus = true;
            calculator.display += operation;
        }
        else if (calculator.lastSymbol !== 'operation'){
            calculator.lastSymbol = 'operation';
            calculator.display += operation;
        }
    };

    calculator.onClear = () => {
        calculator.display = '0';
        calculator.history = 'History';
        calculator.restrictMinus = false;
        calculator.result = null;
        calculator.lastSymbol = null;
    };

    calculator.onBackspace = () => {
        if(calculator.display.length > 1 && calculator.display !== 'Error' && calculator.result === null) {
            calculator.display = calculator.display.substring(0, calculator.display.length - 1);
        }
        else {
            calculator.display = '0'
        }
    };

    calculator.onEvaluate = () => {
        if(calculator.display !== calculator.result) {
            const result = parseInt(sy.compute(calculator.display));
            calculator.history = calculator.display;
            calculator.display = Number.isNaN(result) ? 'Error' : result.toString();
            calculator.result = calculator.display;
        }
    };

    return calculator
};

export default createCalculator()