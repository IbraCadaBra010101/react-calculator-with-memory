import React from 'react';

const Screen = props => (
    (<React.Fragment>
        <h1>React Calculator</h1>
        <input type="text" value={props.input} onChange={e => props.handleChange(e.target.value)}/>
        <h3>{props.result}</h3>
    </React.Fragment>)
);
export default Screen;
