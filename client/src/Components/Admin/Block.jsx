import React from 'react';
import completeButton from '../../images/completeButton.svg'
import { useDeleteTask } from '../../Hooks/useDeleteTask';

const Block = (props) => {
    return (
        <div className='admin-task-block'>
            <div className="user-task">
                <h3>{props.user_name}</h3>
                <h4>{props.task_id}</h4>
            </div>
            <div className="delete-task">
                <button onClick={useDeleteTask(props.task_id)}><img src={completeButton}/></button>
            </div>
        </div>
    );
}

export default Block;
