import React, {Component} from 'react';

class Screen extends Component {

    render() {

        return (<React.Fragment>
            <input type="text" value={this.props.input} onChange={this.props.handleChange} />
            <h3>{this.props.input}</h3>
        </React.Fragment>)
    }
}


export default Screen;
// Värdet kommer från state.
//     Värdet får bara lov att uppdateras med setState.
// render() {
//     return <input type="text"
//                   value={this.state.myValue}
//                   onChange={this.handleChange} />
// }
// handleChange(event) {
//     this.setState({ myValue: event.target.value; });
// }
