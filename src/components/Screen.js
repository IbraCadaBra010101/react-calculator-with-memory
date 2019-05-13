import React from 'react';

const Screen = props => {
    if (props.operatorClicked > 1) {
        return <React.Fragment>

            <h1>React Calculator</h1>
            <input type="text" value={props.input} onChange={e => props.handleChange(e.target.value)}/>
            <h3>Result so far {props.current}</h3>
            <h3>List of results</h3>
            <ol>
                {props.saveAllToList.map((result, index) =>
                    <li key={index}>Result was: {result}</li>
                )}
            </ol>

        </React.Fragment>
    } else {
        return <React.Fragment>
            <h1>React Calculator</h1>
            <input type="text" value={props.input} onChange={e => props.handleChange(e.target.value)}/>
            <h3>List of results</h3>
            <ol>
                {props.saveAllToList.map((result, index) =>
                    <li key={index}>Result was: {result}</li>
                )}
            </ol>

        </React.Fragment>
    }
};
export default Screen;
