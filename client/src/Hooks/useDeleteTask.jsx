import axios from "axios"

export const useDeleteTask = (task_id) => {
    const deleteTask = async () => {
        await axios.delete(`http://localhost:5000/tasks/${task_id}`)
    }
    return deleteTask
}