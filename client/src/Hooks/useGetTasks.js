import axios from "axios"

export const useGetTasks = () => {
    const getTasks = async () => {
        try {
            const getTasksBD = await axios.get('http://localhost:5000/tasks')
            const tasks = getTasksBD.data
            return tasks
        } catch (e) {
            console.log(e)
        }
    }
    return {getTasks}
}