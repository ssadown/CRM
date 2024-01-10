import React, { useContext, useEffect, useState } from 'react';
import Button from '../../Helpers/Button';
import { usePostTask } from '../../Hooks/usePostTask';
import { UserContext } from '../../Context/Context';
import Textarea from '../../Helpers/Textarea';
import UserTaskList from './UserTaskList';

const UserContent = () => {
    const currentUser = useContext(UserContext)
    const [descriptionInfo, setDescriptionInfo] = useState('')
    const {postTask} = usePostTask(currentUser.userInfo.user_name, currentUser.userInfo.user_id, currentUser.userInfo.user_ip, descriptionInfo)
    useEffect(() => {
        console.log(descriptionInfo)
    }, [descriptionInfo])
    return (
            <main>
                <div className="content-main">
                    <Textarea placeholder="Опишите проблему..." setData={setDescriptionInfo} value={descriptionInfo}/>
                    <Button buttonText="Оставить заявку" onClick={postTask}/>
                </div>
                <UserTaskList/>
            </main>
    );
}

export default UserContent;
