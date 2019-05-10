import React, {Component} from 'react';
import Screen from './components/Screen'
import OperandButtons from './components/OperandButtons'

class Calculate extends Component {

    state = {
        operator: '',
        input: 0,
        result: 0,
    };


    handleChange = (event) => {
        this.setState({
            input: event,

        });
    };
    addition = () => {
        this.setState({
            operator: '+',

            // current: this.state.current + Number(this.state.input),
        })
    };
    subtraction = () => {
        this.setState({
            operator: '-',

        })
    };
    clear = () => {
        this.setState({
            input: 0
        })
    };
    equals = () => {
        let operator = this.state.operator;
        if(operator ===)

    };
//     if( currentOperator === '+' ) {
//     resultSoFar = resultSoFar + Number(valueInInputField);
// }
    render() {
        // const result = this.state.current;
        return <React.Fragment>
            <h1>React Calculator</h1>
            <Screen input={this.state.input} handleChange={this.handleChange}/>
            <OperandButtons addition={this.addition}
                            subtraction={this.subtraction}
                            clear={this.clear}
                            equals={this.equals}/>
            <p>Input {this.state.input}: </p>
            <p>Result {this.state.result}: </p>
        </React.Fragment>
    }
}

export default Calculate;
