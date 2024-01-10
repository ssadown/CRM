import React from 'react';

const Status = (props) => {
    return (
        <div className={
            props.taskStatus === 'Рассматривается' ? 'status-block check' :
            props.taskStatus === 'Выполняется' ? 'status-block doing' :
            props.taskStatus === 'Готово' ? 'status-block complete' :
            'status-block complete'
            }>
            <p>Статус: {props.taskStatus}</p>
        </div>
    );
}

export default Status;
