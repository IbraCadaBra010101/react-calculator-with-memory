import React, {Component} from 'react';
import Screen from './Screen'

class Calculate extends Component {
    state = {
        expression: 0
    };

    render() {
        return <React.Fragment className="Fragment">
            <Screen/>
        </React.Fragment>
    }

}

export default Calculate;
