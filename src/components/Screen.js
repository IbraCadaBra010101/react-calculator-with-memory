import React, {Component} from 'react';
import Button from './Button'

class Screen extends Component {


    render() {
        let buttonsReused = [];
        let symbols = ['+', '-', '*', '/', 'MR', 'MS'];
        for (let i = 0; i < 10; i++) {
            buttonsReused.push(<Button text={i}/>);
            console.log(buttonsReused)
        }
        for (let symbol of symbols) {
            buttonsReused.push(<Button text={symbol}/>)
        }

        return (<React.Fragment className="fragment">
            <input type="text" value={this.props.value}/>
            {buttonsReused}
        </React.Fragment>)
    }
}

export default Screen;


