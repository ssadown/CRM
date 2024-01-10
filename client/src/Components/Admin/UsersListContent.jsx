import React from 'react';
import UsersAddBlock from './UsersAddBlock';
import UsersList from './UsersList';

const UsersListContent = () => {
    return (
        <div className='users-list__block'>
            <UsersAddBlock/>
            <UsersList/>
        </div>
    );
}

export default UsersListContent;
