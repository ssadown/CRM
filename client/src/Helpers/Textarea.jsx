import React from 'react';

const Textarea = (props) => {
    return (
        <textarea
        rows='12'
        cols='80'
        placeholder={props.placeholder}
        onChange={(e) => {props.setData(e.target.value)}}
        value={props.value}
        className='standart-textarea'
        />
    );
}

export default Textarea;
