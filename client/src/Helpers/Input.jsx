import React from 'react';

const Input = (props) => {
    return (
        <input
            placeholder={props.placeholder} 
            value={props.value} type={props.type} 
            onChange={(e) => {props.setData(e.target.value)}} 
            className='standart-input'
        />
    );
}

export default Input;
