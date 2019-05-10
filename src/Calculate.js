import React, {Component} from 'react';
import Screen from './components/Screen'
import OperandButtons from './components/OperandButtons'
import CalcMemory from './components/CalcMemory'

class Calculate extends Component {

    state = {
        operator: '',
        input: 0,
        result: 0,
        memory: []
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
            //current: this.state.current - Number(this.state.input),
        })
    };
    clear = () => {
        this.setState({
            input: 0
        })
    };
    equals = () => {
        let currentOperator = this.state.operator;
        console.log(this.state.input);
        if (currentOperator === '+') {
            this.setState({
                result: this.state.result + Number(this.state.input),
            });
        }
        if (currentOperator === '-') {
            this.setState({
                result: this.state.result - Number(this.state.input),
            });
        }
    };

    // VG: Om man klickar på "M+ / spara resultat" ska resultatet hittills sparas i appen.
    // När man senare klickar på "M- /
    // hämta" ska det senast sparade resultatet hämtas läggas i textfältet.
    // Exempel: 1 + 2, lika med (3), spara resultat (3),
    // rensa (0), 5 - (hämta resultat = 3) blir lika med 2

    savedResults = [];
    addToMemory = () => {
        this.savedResults.push(this.state.input);
        // this.savedResults.forEach(el => {
        //     console.log(el);
        // })
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
                            equals={this.equals}/>
            <p>Input {this.state.input}: </p>
            <p>Result {this.state.result}: </p>
            <CalcMemory addToMemory={this.addToMemory} useMemory={this.useMemory}/>
        </React.Fragment>
    }
}

export default Calculate;
