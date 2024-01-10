import React from 'react';
import UsersListButton from '../../Helpers/UsersListButton';
import { useDeleteUser } from '../../Hooks/useDeleteUser';
import { useOpenModal } from '../../Helpers/Func/useOpenModal';

const UserButtonBlock = (props) => {
    const deleteUser = useDeleteUser(props.user_id)
    const changeUser = useOpenModal(props.user_id)
    return (
        <div className='user-list__button-of-user'>
            <UsersListButton onClick={changeUser} buttonText='Изменить пользователя'/>
            <UsersListButton onClick={deleteUser} buttonText='Удалить пользователя'/>
        </div>
    );
}

export default UserButtonBlock;
