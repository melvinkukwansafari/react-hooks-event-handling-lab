// Code Keypad Component Here
import React from 'react';

const Keypad = (props) => {
    let click = {props}
{
    }
    return (
        <div>
            <input type="password" onClick={props.handleClick} />
            <button onClick={() => props.onClick(props >= [1])}>Keypad</button>
           
        </div>
    );
};

export default Keypad;
