import React, {Component} from 'react';

class OperandButtons extends Component {

    render() {
        return (
            <React.Fragment>
                <button className={'operandButton'} onClick={this.props.subtraction}>-</button>
                <button className={'addition'} onClick={this.props.addition}>+</button>
                <button className={'MS'} onClick={this.props.subtraction}>MS</button>
                <button className={'addition'} onClick={this.props.addition}>MR</button>
                <button className={'Clear'} onClick={this.props.clear}>CE</button>
                <button className={'equals'} onClick={this.props.equals}>=</button>
            </React.Fragment>
        )
    }
}

export default OperandButtons;
