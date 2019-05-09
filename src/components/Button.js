import React, {Component} from 'react';

class Button extends Component {
    number = () => {
       this.props.buttonHandler(this.props.text);
    };

    render() {
        return (<button className={'calc-button'} onClick={this.number}>{this.props.text}</button>)
    }
}

export default Button;


