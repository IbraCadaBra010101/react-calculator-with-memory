import React from 'react';

const Screen = props => (
    (<React.Fragment>
        <input type="text" value={props.input} onChange={e => props.handleChange(e.target.value)}/>
        <h3>{props.input}</h3>
    </React.Fragment>)
);

export default Screen;
