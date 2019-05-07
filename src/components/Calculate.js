import React, {Component} from 'react';
import Screen from './Screen'

class Calculate extends Component {
    state = {
        expression: 11
    };

    render() {
        return <React.Fragment>
            <Screen value={this.state.expression}/>
        </React.Fragment>
    }

}

export default Calculate;
