import React from 'react';
import Header from '../Components/Header';
import UserContent from '../Components/User/UserContent';

const UserPage = () => {
    return (
        <div className='wrapper'>
            <Header/>
            <UserContent/>
        </div>
    );
}

export default UserPage;
