import React, {Component} from 'react';
import Screen from './Screen'
import Button from "./Button";

class Calculate extends Component {
    state = {
        expression: 0
    };
    buttonHandler = (value) => {
        this.setState((left) => ({expression: left.expression + value}));
    };

    render() {
        let buttonsReused = [];
        let symbols = ['+', '-', '*', '/', 'MR', 'MS'];
        for (let i = 0; i < 10; i++) {
            buttonsReused.push(<Button key={i} text={i} buttonHandler={this.buttonHandler}/>);
        }
        for (let symbol of symbols) {
            buttonsReused.push(<Button key={symbol} text={symbol} buttonHandler={this.buttonHandler}/>)
        }
        return <React.Fragment>
            <h1>calculate stuff with react</h1>
            <Screen expression={this.state.expression}/>
            {buttonsReused}
        </React.Fragment>
    }
}

export default Calculate;
