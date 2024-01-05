import axios from "axios"
import { getRandomInt } from "../Helpers/Func/getRandomInt"
import { useState } from "react"

export const usePostTask = (user_name, user_id, user_ip, description) => {
    const [getTaskId,setGetTaskId] = useState(getRandomInt(1000000))
    const postTask = async () => {
        await axios.post('http://localhost:5000/tasks', {
            task_id: getTaskId,
            user_name: user_name,
            user_id: user_id,
            user_ip: user_ip, 
            description: description
        })
        setGetTaskId(getRandomInt(1000000))
    }
    return {postTask}
}