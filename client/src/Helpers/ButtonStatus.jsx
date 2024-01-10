import React from 'react';

const ButtonStatus = (props) => {
    return (
        <button 
            onClick={props.taskStatus === 'Готово' ? props.deleteFunction : props.changeFunction}
            className={
            props.taskStatus === 'Рассматривается' ? 'status-block status-button doing' :
            props.taskStatus === 'Выполняется' ? 'status-block status-button complete' :
            props.taskStatus === 'Готово' ? 'status-block status-button confirm' :
            'status-block complete'
            }>
            <p>{
            props.taskStatus === 'Рассматривается' ? "Начать" :
            props.taskStatus === 'Выполняется' ? "Готово" :
            props.taskStatus === 'Готово' ? "Подтвердить" :
            'Неизвестное значение'
            }</p>
        </button>
    );
}

export default ButtonStatus;
