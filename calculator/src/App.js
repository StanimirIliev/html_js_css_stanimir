import React from 'react';
import style from './Style';
import CreateCalculator from './Calculator';



class App extends React.Component {

    constructor() {
        super();
        this.state = {
            display: '0',
            history: 'History'
        };
    }

    componentDidMount() {
        this.calculator = CreateCalculator
    }

    updateDisplay() {
        this.setState({display: this.calculator.display,history: this.calculator.history});
    }

    onNumber(e) {
        this.calculator.onNumber(parseInt(e.target.innerHTML));
        this.updateDisplay();
    }

    onOperation(e) {
        this.calculator.onOperation(e.target.innerHTML);
        this.updateDisplay();
    }

    onEvaluate() {
        this.calculator.onEvaluate();
        this.updateDisplay();
    }

    onClear() {
        this.calculator.onClear();
        this.updateDisplay();
    }

    onBackspace() {
        this.calculator.onBackspace();
        this.updateDisplay();
    }

    render() {
        return (
            <div>
                <h1 style={style.history}>{this.state.history}</h1>
                <h1 style={style.display}>{this.state.display}</h1>
                <div>
                    <button style={style.clearAndBackspace} onClick={this.onClear.bind(this)}>C</button>
                    <button style={style.clearAndBackspace} onClick={this.onBackspace.bind(this)}>{'\u2B05'}</button>
                </div>
                <div>
                    <button style={style.numbers} onClick={this.onNumber.bind(this)}>7</button>
                    <button style={style.numbers} onClick={this.onNumber.bind(this)}>8</button>
                    <button style={style.numbers} onClick={this.onNumber.bind(this)}>9</button>
                    <button style={style.operations} onClick={this.onOperation.bind(this)}>+</button>
                </div>
                <div>
                    <button style={style.numbers} onClick={this.onNumber.bind(this)}>4</button>
                    <button style={style.numbers} onClick={this.onNumber.bind(this)}>5</button>
                    <button style={style.numbers} onClick={this.onNumber.bind(this)}>6</button>
                    <button style={style.operations} onClick={this.onOperation.bind(this)}>-</button>
                </div>
                <div>
                    <button style={style.numbers} onClick={this.onNumber.bind(this)}>1</button>
                    <button style={style.numbers} onClick={this.onNumber.bind(this)}>2</button>
                    <button style={style.numbers} onClick={this.onNumber.bind(this)}>3</button>
                    <button style={style.operations} onClick={this.onOperation.bind(this)}>*</button>
                </div>
                <div>
                    <button style={style.zero} onClick={this.onNumber.bind(this)}>0</button>
                    <button style={style.operations} onClick={this.onEvaluate.bind(this)}>=</button>
                    <button style={style.operations} onClick={this.onOperation.bind(this)}>/</button>
                </div>
            </div>
        );
    }
}

export default App;