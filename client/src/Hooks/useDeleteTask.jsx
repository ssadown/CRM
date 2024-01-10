import axios from "axios"

export const useDeleteTask = (task_id) => {
    const deleteTask = async () => {
        try {
            await axios.delete(`http://localhost:5000/tasks/${task_id}`)
        } catch (error) {
            console.error(error)
        }
    }
    return deleteTask
}