import React, { useContext, useEffect, useState } from 'react';
import UserTaskBlock from './UserTaskBlock';
import axios from 'axios';
import { UserContext } from '../../Context/Context';

const UserTaskList = () => {
    const [taskList, setTaskList] = useState([])
    const currentUser = useContext(UserContext)
    useEffect(() => {
        const getTasks = async () => {
            const getListTasks = await axios.get('http://localhost:5000/tasks')
            setTaskList(getListTasks.data)
        }
        getTasks()
    }, [taskList])
    const filterTasksByUser = (user) => {
        return taskList.filter(task => task.user_name === user)
    }
        if (taskList.length === 0) {
            return (
                <div className="user-tasklist">
                    <p>Все ваши задачи выполнены</p>
                </div>
            )
        } else {
            return (
                <div className='user-tasklist'>
                    {filterTasksByUser(currentUser.userInfo.user_name).map((param) => {
                        return (
                            <UserTaskBlock
                            user_name={param.user_name} 
                            task_id={param.task_id}
                            description={param.description}
                            status={param.status}
                            key={param.task_id}
                            />
                        )
                    })}
                </div>
            );
        }
}

export default UserTaskList;
