
import React, {Component} from 'react';

class Screen extends Component {

    render() {

        return (<React.Fragment>
            <input type="text" value={this.props.input} onChange={e => this.props.handleChange(e.target.value)} />
            <h3>{this.props.input}</h3>
        </React.Fragment>)
    }
}


export default Screen;
