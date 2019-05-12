import React, {Component} from 'react';
import Screen from './components/Screen'
import OperandButtons from './components/OperandButtons'
import CalcMemory from './components/CalcMemory'

class Calculate extends Component {
    state = {
        operator: '',
        input: '',
        current: '',
        result: 0,
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

    // addition = () => {
    //     this.setState((prev, props) => {
    //         return {input: Number(prev.input)}
    //     });
    //     console.log(this.state.input);
    //
    // };

    // submit(){
    //     this.setState(function(prevState, props){
    //         return {showForm: !prevState.showForm}
    //     });
    // }
    addition = () => {

        this.setState({
            operator: '+',
            additionMarker: true,
            subtractionMarker: false,
            current: Number(this.state.input) + Number(this.state.current)
        });
    };
    // addition = () => {
    //     this.setState(prevState => {
    //         return {result: prevState.input }
    //     })
    // };
    subtraction = () => {
        this.setState({
            current: this.state.input
        });
        this.setState(() => {
            if (this.state.current > 0) {
                let result = this.state.current - Number(this.state.input);
                console.log(result);
                return {
                    current: result
                }
            }
        })

    };
    // subtraction = () => {
    //     this.setState({
    //         operator: '-',
    //         subtractionMarker: true,
    //         additionMarker: false,
    //         current: Number(this.state.input)
    //     });
    //
    // };
    clear = () => {
        this.setState({
            input: 0,
        })
    };
    equals = () => {
        // let currentOperator = this.state.operator;
        // if (currentOperator === '+') {
        //     this.setState({result: this.state.current - Number(this.state.input)});
        // } else {
        //     this.setState({
        //         result: this.state.result
        //     })
        // }

        this.setState({
            result: this.state.current
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

            <Screen input={this.state.input} result={this.state.result} handleChange={this.handleChange}/>
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
