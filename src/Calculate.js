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


    operatorClicked = 0;
    handleChange = (event) => {
        this.setState({
            input: event,
        });
    };
    addition = () => {
        this.operatorClicked++;
        this.setState({
            operator: '+',
            additionMarker: true,
            subtractionMarker: false,
            current: Number(this.state.input) + Number(this.state.current)
        });

    };
    subtraction = () => {
        this.operatorClicked++;
        this.setState({
            current: this.state.input,
            operator: '-',
            subtractionMarker: true,
            additionMarker: false,
        });
        this.setState(() => {
            if (this.state.current > 0) {
                let result = this.state.current - Number(this.state.input);
                console.log(result);
                return {
                    current: result,
                }
            }
        });
    };
    clear = () => {
        this.setState({
            input: 0,
        })
    };
    equals = () => {
        this.setState({result: this.state.current},
            () => {
                return {
                    result: this.state.current,
                    all: this.state.all.push(this.state.result)
                }
            }
        );

        console.log(this.state.all);
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

    render() {
        return <React.Fragment>
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
            <CalcMemory addToMemory={this.addToMemory} useMemory={this.useMemory}/>
        </React.Fragment>
    }
}

export default Calculate;
