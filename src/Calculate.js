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
        all: [],
        showAll: false,
        additionMarker: false,
        subtractionMarker: false,
        markingColor: 'green'
    };


    // Jag förstår. Nej, det ska inte behövas några
    // callbacks. Om du sparat resultatet av den senaste
    // plus/minus operationen och det senast inskrivna värdet i state, så är det bara att kombinera dem.
    //
    // Rendera resultatet när man klickar på "=". När man skriver en
    // längre operation (1+2-3+4 osv) så vill jag se delresultatet
    // (t.ex. i input-fältet) varje gång man klickar på plus/minus.


    operatorClicked = 0;
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
            current: this.state.input,
        });
        console.log(this.state)
    };

    subtraction = () => {
        this.setState({
            operator: '-',
            additionMarker: false,
            subtractionMarker: true,
            current: this.state.input,
        });
        console.log(this.state)
    };
    clear = () => {
        this.setState({
            input: 0,
        })
    };

    equals = () => {
        if (this.state.operator === '+') {
            let result = +Number(this.state.current) + Number(this.state.input);
            this.setState({
                current: result,
                result: result + Number(this.state.current)
            });
        }
        if (this.state.operator === '-') {
            let result =- Number(this.state.current) - Number(this.state.input);
            this.setState({
                current: this.state.current - Number(this.state.input),
                result: result
            });
        }
        console.log('test');
    };
savedResults = [];
addToMemory = () => {
    this.savedResults.push(this.state.current);
};
latestNum = 0;
useMemory = () => {
    const toBeUsedInExpression = [...this.savedResults];
    this.latestNum = toBeUsedInExpression.pop();
    this.setState({
        current: this.latestNum - this.latestNum,
        input: this.latestNum,
    });
};

render()
{
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
