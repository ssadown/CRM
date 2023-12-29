import React from 'react';

const Button = (props) => {
    return (
        <button className='standart-button' onClick={props.onClick}><p>{props.buttonText}</p></button>
    );
}

export default Button;
