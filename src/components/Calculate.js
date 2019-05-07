import React, {Component} from 'react';
import Screen from './Screen'

class Calculate extends Component {
    state = {
        expression: 0
    };

    render() {
        return <React.Fragment>
            <Screen state={this.state.expression}/>
        </React.Fragment>
    }

}

export default Calculate;
