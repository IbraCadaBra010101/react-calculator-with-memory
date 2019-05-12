import React from 'react';

const OperandButtons = props =>

    (
        (
            <React.Fragment>
                <button className={'operandButton'}
                        style={{backgroundColor: props.subtractionMarker ? props.markingColor: 'white'}}
                        onClick={props.subtraction}>-</button>
                <button className={'addition'}
                         style={{backgroundColor: props.additionMarker ? props.markingColor: 'white'}}
                        onClick={props.addition}>+</button>
                <button className={'Clear'} onClick={props.clear}

                >Clear</button>
                <button  onClick={props.equals}

                >=</button>
            </React.Fragment>
        )
    );
export default OperandButtons;


// ={this.state.additionMarker}
//  = {this.state.subtractionMarker}
