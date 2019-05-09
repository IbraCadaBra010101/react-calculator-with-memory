import React, {Component} from 'react';
import Screen from './components/Screen'
import Button from "./components/Button";
import OperandButtons from './components/OperandButtons'

class Calculate extends Component {

    state = {
        operator: '',
        input: 0,
        current: 0,
        result: 0,
    };
    handleChange = (event) => {
        this.setState({
            input:  event.target.value
        });
        console.log(this.state.input)
    };
    addition = () => {
        this.setState({
            operator: '+',
            current:  this.state.current +  Number(this.state.input)
        })
    };
    subtraction = () => {
        this.setState({
            operator: '-',
            current:  this.state.current  - Number(this.state.input)
        })
    };

    render() {

        return <React.Fragment>
            <h1>React Calculator</h1>
            <Screen input={this.state.input} handleChange={this.handleChange}/>
            <OperandButtons addition={this.addition} subtraction={this.subtraction}/>
            <p>{this.state.input}: Input</p>
            <p>{this.state.current}: Result</p>
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
