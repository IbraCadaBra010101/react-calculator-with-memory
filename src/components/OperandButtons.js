import React, {Component} from 'react';

class OperandButtons extends Component {

    render() {
        return (
            <React.Fragment>
                <button className={'operandButton'} onClick={this.props.subtraction}>-</button>
                <button className={'operandButton'} onClick={this.props.addition}>+</button>
                <button className={'operandButton'} onClick={this.props.subtraction}>MS</button>
                <button className={'operandButton'} onClick={this.props.addition}>MR</button>
            </React.Fragment>
        )
    }
}

export default OperandButtons;
