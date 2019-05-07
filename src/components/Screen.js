import React, {Component} from 'react';

class Screen extends Component {

    render() {

        return (<React.Fragment>
            <input type="text" value={this.props.expression}/>
        </React.Fragment>)
    }
}


export default Screen;

// handleClick = event => {
//     this.setState( (prevState, props) => {
//             // returns a new state object
//             return { counter: prevState.counter + 1 };
//         },
//         () => {
//             // runs after changed state
//         }  // callback
//     );  // setState
// }
