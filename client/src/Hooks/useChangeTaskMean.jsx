import axios from "axios"

export const useChangeTaskMean = (task_id, taskStatus) => {
    const changeTask = async () => {
        try {
            if (taskStatus === 'Рассматривается') {
                await axios.put(`http://localhost:5000/tasks/`, {
                    task_id: task_id,
                    status: 'Выполняется'
            })
            } else if (taskStatus === 'Выполняется') {
                await axios.put(`http://localhost:5000/tasks/`, {
                    task_id: task_id,
                    status: 'Готово'
            })
            } else {
                return console.log('Данные поступили неверно!')
            }
        } catch (error) {
            console.error(error)
        }
    }
    return changeTask
}