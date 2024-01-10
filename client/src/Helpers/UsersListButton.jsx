import React from 'react';

const UsersListButton = (props) => {
    return (
            <button
                className='users-list__add-button' 
                onClick={props.onClick}
                >
                    <p>
                        {props.buttonText}
                    </p>
            </button>
    );
}

export default UsersListButton;
