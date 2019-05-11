import React, {Component} from 'react';
import Screen from './components/Screen'
import OperandButtons from './components/OperandButtons'
import CalcMemory from './components/CalcMemory'

class Calculate extends Component {
    state = {
        operator: '',
        input: '',
        current: '',
        result: '',
        memory: [],
        additionMarker: false,
        subtractionMarker: false,
        markingColor: 'green'
    };
    handleChange = (event) => {
        this.setState({
            input: event,
        });
    };
    addition = () => {
        this.setState({
            operator: '+',
            additionMarker: true,
            subtractionMarker: false,
            current: Number(this.state.input) +  Number(this.state.current )
        });
    };
    subtraction = () => {
        this.setState({
            operator: '-',
            subtractionMarker: true,
            additionMarker: false,
            current: -Number(this.state.input) - this.state.current
        });
        console.log(this.state.current + ' current');
        console.log(this.state.input + ' input');
    };
    clear = () => {
        this.setState({
            input: 0,
        })
    };
    equals = () => {
        this.setState({
            result: Number(this.state.current)
        })
    };
    savedResults = [];
    addToMemory = () => {
        this.savedResults.push(this.state.input);
    };
    useMemory = () => {
        const toBeUsedInExpression = [...this.savedResults];
        let latestNum = toBeUsedInExpression.pop();
        this.setState({
            input: latestNum
        })
    };
    render() {
        return <React.Fragment>
            <h1>React Calculator</h1>
            <Screen input={this.state.input} handleChange={this.handleChange}/>
            <OperandButtons addition={this.addition}
                            subtraction={this.subtraction}
                            clear={this.clear}
                            equals={this.equals}
                            additionMarker={this.state.additionMarker}
                            subtractionMarker={this.state.subtractionMarker}
                            markingColor={this.state.markingColor}
            />
            <p>Input {this.state.input}: </p>
            <p>Result {this.state.result}: </p>
            <CalcMemory addToMemory={this.addToMemory} useMemory={this.useMemory}/>
        </React.Fragment>
    }
}

export default Calculate;
