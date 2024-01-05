import React from 'react';
import Status from '../../Helpers/Status';

const UserTaskBlock = (props) => {
    return (
        <div className='user-task__block'>
            <div className="user-task__info">
                <h3>{props.user_name}</h3>
                <h4>{props.task_id}</h4>
            </div>
            <div className="user-task__description">
                <p>{props.description === null ? 'Вы не описали задачу' : props.description}</p>
            </div>
            <div className="user-task__status">
                <Status taskStatus={props.status}/>
            </div>
        </div>
    );
}

export default UserTaskBlock;
