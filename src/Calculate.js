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
            current: 0,
            result: 0,
        })
    };
    equals = () => {

        if (this.state.operator === '+') {
            this.setState({
                result: Number(this.state.input) + this.state.current,
                current: Number(this.state.input) + this.state.current,
            });
        }
        if (this.state.operator === '-') {
            this.setState({
                result: this.state.current - Number(this.state.input),
                current: this.state.current - Number(this.state.input),
            });
        }
    };
    saveAllToList = [];
    saveAllResults = () => {
        this.saveAllToList.push(this.state.result);
        console.log(this.saveAllToList)
    };
    savedResults = [];
    addToMemory = () => {
        this.savedResults.push(this.state.result);
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
            <Screen input={this.state.input}
                    result={this.state.result}
                    current={this.state.current}
                    handleChange={this.handleChange}
                    operatorClicked={this.operatorClicked}
                    all={this.state.all}
                    saveAllToList={this.saveAllToList}
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
                        saveAllResults={this.saveAllResults}

            />
        </React.Fragment>
    }
}

export default Calculate;

// VG: Om man klickar på "M+ / spara resultat" ska resultatet
// hittills sparas i appen. När man senare klickar på "M- / hämta"
// ska det senast sparade resultatet hämtas läggas i textfältet.
//     Exempel: 1 + 2, lika med (3), spara resultat (3), rensa (0),
// 5 - (hämta resultat = 3) blir lika med 2

// VG: appen ska klara operationer i flera steg.
//     Alltså att man kan klicka flera gånger på
// plus eller minus innan man klickar på lika med.
//     Exempel: 1 + 2 + 3 + 4. Från och med andra
// gånger man klickar på plus/minus ska resultatet
// hittills visas - men inte läggas i listan.
