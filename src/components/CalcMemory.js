import React from 'react'

const CalcMemory = props => (
    (<div>
        <button className={'M-'} onClick={props.useMemory}>M-</button>
        <button className={'M+'} onClick={props.addToMemory}>M+</button>
        <button className={'M+'} onClick={props.saveAllResults}>Spara resultat</button>

    </div>)
);
export default CalcMemory
