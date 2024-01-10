import axios from 'axios';
import React, { useEffect, useState } from 'react';
import UserBlock from './UserBlock';

const UsersList = () => {
    const [listOfUserFromDB, setListOfUserFromDB] = useState([])
    useEffect(() => {
        const getUsers = async () => {
            try {
                const getUsersDB = await axios.get('http://localhost:5000/users')
                setListOfUserFromDB(getUsersDB.data)
            } catch (e) {
                console.log(e)
            }
        }
        getUsers()
    }, [listOfUserFromDB])
    return (
        <div className='users-list__content'>
            {listOfUserFromDB.map((user) => {
                return (
                    <UserBlock
                    name={user.user_name}
                    password={user.user_password}
                    role={user.user_role}
                    nickname={user.user_nickname}
                    ip={user.user_ip}
                    department={user.user_department}
                    user_id={user.user_id}
                    key={user.user_id}
                />
                )
            })}
        </div>
    );
}

export default UsersList;
