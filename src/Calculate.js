import React, {Component} from 'react';
import Screen from './components/Screen'
import OperandButtons from './components/OperandButtons'
import CalcMemory from './components/CalcMemory'

class Calculate extends Component {
    state = {
        operator: '',
        input: '',
        current: 0,
        result: 0,
        soFar: 0,
        all: [],
        showAll: false,
        additionMarker: false,
        subtractionMarker: false,
        markingColor: 'green',
        operatorClicked: 0,
    };
    handleChange = (event) => {
        this.setState({
            input: event,
        });
    };
    addition = () => {
        let operatorWasClicked = this.state.operatorClicked;

        this.setState({
            operator: '+',
            additionMarker: true,
            subtractionMarker: false,
            current: this.state.current + Number(this.state.input),
            result: this.state.current,
            operatorClicked: this.state.operatorClicked + 1,
        });

        if (operatorWasClicked > 0) {
            this.setState({
                input: this.state.current + Number(this.state.input)
            })
        }
    };
    subtraction = () => {
        let operatorWasClicked = this.state.operatorClicked;
        this.setState({
            operator: '-',
            additionMarker: false,
            subtractionMarker: true,
            current: this.state.input,
            result: this.state.current,
            operatorClicked: this.state.operatorClicked + 1,
        });
        if (operatorWasClicked > 0) {
            this.setState({
                input: Number(this.state.current) - Number(this.state.input)
            })
        }
    };
    clear = () => {
        this.setState({
            input: 0,
        })
    };
    equals = () => {
        if (this.state.operator === '+') {
            this.setState({
                result: Number(this.state.input) + this.state.current,
                current: Number(this.state.input) + this.state.current
            });
        }
        if (this.state.operator === '-') {
            this.setState({
                result: this.state.current - Number(this.state.input),
                current: this.state.current - Number(this.state.input)
            });
        }
    };
    savedResults = [];
    addToMemory = () => {
        this.savedResults.push(this.state.input);
    };
    latestNum = 0;
    useMemory = () => {
        const toBeUsedInExpression = [...this.savedResults];
        this.latestNum = toBeUsedInExpression.pop();
        this.setState({
            input: this.latestNum,
        });
    };

    render() {
        return <React.Fragment>
            <h3>Result: {this.state.result}</h3>
            <h3>Current:{this.state.current}</h3>
            <Screen input={this.state.input}
                    result={this.state.result}
                    current={this.state.current}
                    handleChange={this.handleChange}
                    operatorClicked={this.operatorClicked}
                    all={this.state.all}
            />
            <OperandButtons addition={this.addition}
                            subtraction={this.subtraction}
                            clear={this.clear}
                            equals={this.equals}
                            additionMarker={this.state.additionMarker}
                            subtractionMarker={this.state.subtractionMarker}
                            markingColor={this.state.markingColor}
            />
            <CalcMemory addToMemory={this.addToMemory}
                        useMemory={this.useMemory}
                        all={this.state.all}
            />
        </React.Fragment>
    }
}

export default Calculate;
