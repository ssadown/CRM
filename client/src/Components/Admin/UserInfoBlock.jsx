import React from 'react';

const UserInfoBlock = (props) => {
    return (
        <div className="user-list__info-about-user">
            <p>ФИО: {props.name || 'Не указано'}</p>
            <p>Логин: {props.nickname || 'Не указано'}</p>
            <p>Пароль: {props.password || 'Не указано'}</p>
            <p>Отдел: {props.department || 'Не указано'}</p>
            <p>IP-адрес: {props.ip || 'Не указано'}</p>
            <p>Роль: {props.role || 'Не указано'}</p>
        </div>
    );
}

export default UserInfoBlock;
