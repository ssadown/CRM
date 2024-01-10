import React from 'react';
import UserInfoBlock from './UserInfoBlock';
import UserButtonBlock from './UserButtonBlock';

const UserBlock = (props) => {
    return (
        <div className='user-list__block-of-user'>
            <UserInfoBlock
                name={props.name}
                nickname={props.nickname}
                password={props.password}
                department={props.department}
                ip={props.ip}
                role={props.role}
            />
            <UserButtonBlock user_id={props.user_id}/>
        </div>
    );
}

export default UserBlock;
