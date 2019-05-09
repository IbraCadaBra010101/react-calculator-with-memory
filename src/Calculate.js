import React, {Component} from 'react';
import Screen from './components/Screen'
import Button from "./components/Button";
import OperandButtons from './components/OperandButtons'

class Calculate extends Component {

    state = {
        // operator: '',
        input: 0,
        current: 0,
        result: 0,
    };

    buttonHandler = (event) => {
        // if button + is pressed setState to add etc . . .
        // get the innerHTML of each button
        this.setState({
            input: event
        });
    };

    operandHandler = (event) => {
        let operand = event.target.innerHTML;
        if (operand) {
            if (operand === '+') {
               console.log(operand);
            }
        }
    };


    render() {

        let buttonsReused = [];
        let symbols = ['+', '-', '*', '/', 'MR', 'MS'];

        for (let i = 0; i < 10; i++) {
            buttonsReused.push(<Button key={i} text={i} buttonHandler={this.buttonHandler}/>);
        }

        for (let symbol of symbols) {
            buttonsReused.push(<OperandButtons key={symbol} operands={symbol} operandHandler={this.operandHandler}/>)
        }
        return <React.Fragment>
            <h1>React Calculator</h1>
            <Screen input={this.state.input} buttonHandler={this.buttonHandler}/>
            {buttonsReused}
            <p>{this.state.input}</p>

        </React.Fragment>
    }
}

export default Calculate;


//
// changeTitle: function changeTitle (event) {
//     this.setState({ title: event.target.value });
//     this.validateTitle();
// },
// validateTitle: function validateTitle () {
//     if (this.state.title.length === 0) {
//         this.setState({ titleError: "Title can't be blank" });
//     }
// },
// .
