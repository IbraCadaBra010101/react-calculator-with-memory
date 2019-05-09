import React, {Component} from 'react';

class OperandButtons extends Component {

    render() {
        return (

            <button className={'operandButton'} onClick={this.props.operandHandler}>{this.props.operands}</button>
        )
    }
}
export default OperandButtons;
