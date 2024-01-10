import React from 'react';
import Status from '../../Helpers/Status';
import ButtonStatus from '../../Helpers/ButtonStatus';
import { useChangeTaskMean } from '../../Hooks/useChangeTaskMean';
import { useDeleteTask } from '../../Hooks/useDeleteTask';

const Block = (props) => {
    const listTasksFromDB = props.tasks
    const changeTask = useChangeTaskMean(listTasksFromDB.task_id, listTasksFromDB.status)
    const deleteTask = useDeleteTask(listTasksFromDB.task_id)
    return (
        <div className='admin-task-block'>
            <div className="user-task">
                <h3>{listTasksFromDB.user_name}</h3>
                <h4>{listTasksFromDB.task_id}</h4>
                <h4>{listTasksFromDB.user_ip}</h4>
            </div>
            <div className="user-task__description-admin">
                <p>{listTasksFromDB.description}</p>
            </div>
            <div className="status-task">
                <div className="status-task__info-part">
                    <Status taskStatus={listTasksFromDB.status}/>
                </div>
                <div className="status-task__info-part">
                    <ButtonStatus deleteFunction={deleteTask} changeFunction={changeTask} taskStatus={listTasksFromDB.status}/>
                </div>
            </div>
        </div>
    );
}

export default Block;
