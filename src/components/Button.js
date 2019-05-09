import React, {Component} from 'react';

class Button extends Component {
    number = () => {
        this.props.buttonHandler(this.props.text);
    };

    render() {
        return (<React.Fragment>
                <button className={'calcNum'} onClick={this.number}>{this.props.text}</button>
            </React.Fragment>


        )
    }
}

export default Button;


