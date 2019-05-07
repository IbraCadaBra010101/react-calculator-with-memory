import React, {Component} from 'react';
import Button from './Button';

class Calculator extends Component {
    state = {
        processThisNumber: 0
    };

    render() {
        let numeric = [];
        let symbols = ['+', '-', '*', '/', 'MR', 'MS'];
        for(let symbol of symbols){
            numeric.push(<Button text={symbol}/>)
        }
        for (let i = 0; i < 10; i++) {
            numeric.push(<Button text={i}/>);
            console.log(numeric)
        }

        return (<div>{numeric}</div>)
    }
}

export default Calculator;
