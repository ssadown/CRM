import React, { useContext } from 'react';
import Button from '../Helpers/Button';
import { usePostTask } from '../Hooks/usePostTask';
import { UserContext } from '../Context/Context';

const UserContent = () => {
    const currentUser = useContext(UserContext)
    const {postTask} = usePostTask(currentUser.userInfo.user_name)
    return (
            <main>
                <div className="content-main">
                    <Button buttonText="Оставить заявку" onClick={postTask}/>
                </div>
            </main>
    );
}

export default UserContent;
